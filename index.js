const express = require("express");
const dotenv = require("dotenv");
// const dbRouter = require("./routes/dbRouter");
const example = require("./example.js");
dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3001);

// db
app.use("/db", example);

// Root
app.use("/", (req, res) => {
  res.send("connected");
});
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port connected!!");
});
