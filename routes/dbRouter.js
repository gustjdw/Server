const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("/db");
});

router.get("/getInfo", async (req, res) => {
  const allInfo = await prisma.users.findMany();
  console.log(allInfo);
  res.send(allInfo);
});

router.post("/insertInfo", async (req, res) => {
  console.log("insertInfo");
  const { menu, old, sex, race } = req.body;
  await prisma.users.create({
    data: {
      menu: menu,
      old: old,
      sex: sex,
      race: race,
    },
  });
  res.end();
});

module.exports = router;
