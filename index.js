const express = require("express");
const dotenv = require("dotenv");
const dbRouter = require("./routes/dbRouter");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 3001);

app.use("/", (req, res) => {
  res.send("connected");
});
app.use("/db", dbRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port connected!!");
});
