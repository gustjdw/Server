const dbService = require("../service/dbService");

// 모든 데이터 출력
exports.readInfo = async (req, res) => {
  const allInfo = await dbService.getInfo();
  res.status(200).json(allInfo);
};

// 데이터 입력
exports.createInfo = async (req, res) => {
  const { menu, old, sex, race } = req.body;

  if (menu && old && sex && race) {
    try {
      const newInfo = await dbService.insertInfo(menu, old, sex, race);
      res.status(200).json(newInfo);
    } catch (err) {
      console.log("에러", err);
      res.status(400).json({ message: err.message });
    }
  } else {
    console.log("입력하지 않은 항목이 존재");
    res.status(400).json({ message: "입력하지 않은 항목이 존재" });
  }
};
