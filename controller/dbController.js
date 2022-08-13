const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 모든 데이터 출력
exports.getInfo = async (req, res) => {
  const allInfo = await prisma.users.findMany();
  console.log("dbController.getInfo", allInfo);
  res.status(200).json(allInfo);
};

// 데이터 입력
exports.createInfo = async (req, res) => {
  console.log("dbController.createInfo");
  const { menu, old, sex, race } = req.body;
  const newInfo = await prisma.users.create({
    data: {
      menu: menu,
      old: old,
      sex: sex,
      race: race,
    },
  });
  res.status(200).json(newInfo);
};
