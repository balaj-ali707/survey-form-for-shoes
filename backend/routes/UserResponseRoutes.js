const express = require("express")
const router = express.Router()
const UserResponseController = require("../controllers/UserResposeCotroller")

//POST
router.post("/save-data", UserResponseController.saveData)

//GET
router.get("/get-data", UserResponseController.getData)

module.exports = router