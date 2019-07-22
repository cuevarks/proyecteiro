const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/chat", routes);

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server running in: ${process.env.PORT || "3000"}`);
});
