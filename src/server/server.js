const express = require("express");
const routes = require("./routes");
const app = express();

const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(express.json());
app.use("/chat", routes);
app.use(allowCrossDomain);
app.listen(process.env.PORT || "3000", () => {
  console.log(`Server running in: ${process.env.PORT || "3000"}`);
});
