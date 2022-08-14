const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getInfo = async () => {
  const info = await prisma.users.findMany();
  return info;
};

exports.insertInfo = async (menu, old, sex, race) => {
  const newInfo = await prisma.users.create({
    data: {
      menu: menu,
      old: old,
      sex: sex,
      race: race,
    },
  });
  return newInfo;
};
