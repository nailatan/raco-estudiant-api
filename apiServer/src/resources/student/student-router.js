const express = require("express");
const {
  getAllStudent,
  getOneStudent,
  createStudent,
  deleteStudent,
  updateStudent,
} = require("./student-controller");

const studentRouter = express.Router();

studentRouter.get("/", getAllStudent);

studentRouter.post("/", createStudent);

studentRouter.delete("/:idStudent", deleteStudent);

studentRouter.put("/:idStudent", updateStudent);

studentRouter.get("/:idStudent", getOneStudent);

module.exports = studentRouter;
