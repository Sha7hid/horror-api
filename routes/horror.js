const express = require("express");

const router = express.Router();
const horrorController = require("../controllers/horror");

// Get All Horror Movies
router.get("/", horrorController.getAllHorror);

// Save a Horror Movie
router.post("/add", horrorController.saveHorror);

// GEt a Single Horror Movie
router.get("/horror/:id", horrorController.getHorror);

// Update a Horror Movie
router.put("/horror/edit/:id", horrorController.updateHorror);

// Delete a Horror Movie
router.delete("/horror/:id", horrorController.deleteHorror);

module.exports = router;
