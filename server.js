const express = require("express");

const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const app = express();
const Router = require("./controllers/routes/users.route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ info: "Conect db" }).status(200);
});

app.use("/users", Router);

app.listen(port, (err) => {
  if (err) return;
  console.log("running on port" + port);
});
