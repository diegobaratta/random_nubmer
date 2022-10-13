const express = require("express")
const { 
    saveRandNum
} = require("../controllers/randNumController")

const router = express.Router()

//POST a new number
router.post("/", saveRandNum)

module.exports = router