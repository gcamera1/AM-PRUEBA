import express from "express";
require("express-async-errors");

const router = express.Router();

router
  .get("/", function (request, response) {
    response.status(200).send("ok");
  });


export default router;
