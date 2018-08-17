import express from "express";
require("express-async-errors");
import {get, getAll} from "app/controllers/HotelController";

const router = express.Router();

router
  .get("/hotel/:id", get)
  .get("/hotel", getAll);


export default router;
