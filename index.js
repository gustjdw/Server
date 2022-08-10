const express = require("express");
const dotenv = require("dotenv");
const dbRouter = require("./routes/dbRouter.js");
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3001);
dotenv.config();

// db
app.use("/db", dbRouter);

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

// Server
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port connected!!");
});
