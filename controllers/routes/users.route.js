const express = require("express");
const {
  getUser,
  connectOne,
  createUser,
  updateUser,
  deleteUser,
} = require("../user.controller");

const Router = express.Router();

Router.get("/", getUser);
Router.get("/:id", connectOne);
Router.post("/", createUser);
Router.put("/:id", updateUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
