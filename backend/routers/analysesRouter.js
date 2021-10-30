const express = require("express")
const {addAnalyses} = require('../controllers/analysesContoller')
const router = express.Router()

router.post("/insertAnalyses", addAnalyses)
module.exports = router
