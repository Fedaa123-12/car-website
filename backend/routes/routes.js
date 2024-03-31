//import express
import express from "express";

//import functions from controller
import {
  showAllCars,
  showCarByID,
  createCar
} from "../controllers/car.js";

//init express router
const router = express.Router();




//get all product
router.get("/", showAllCars);

//get car by ID
router.get("/getCarByID",  showCarByID);


//add new car
router.post("/newCar" , createCar);
//export default router
export default router;