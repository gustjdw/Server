const dbService = require("../service/dbService");

exports.addInfo = async (req, res) => {
  const { uuid, menu, old, sex, race } = req.body;

  if (!menu || !old || !sex || !race) res.send("입력하지 않은 항목 존재");

  try {
    const newPayment = { uuid, menu, old, sex, reace };
    const newPaymentInfo = await dbService.insertInfo(newPayment);
    res.send("paymentInfo 추가");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
