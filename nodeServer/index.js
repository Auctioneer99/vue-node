const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const routes = require("./routes/api/index.js");

app.use("/api", routes);

const port = 2500;

app.listen(port, () => {
  console.log("Server started on port " + port);
});
