const express = require("express")
const {Addappt,getTodayAppoints,getAlAppoints} = require('../controllers/addApptContoller')
const router = express.Router()


router.post("/addppoints", Addappt)
router.get("/todayAppoint", getTodayAppoints)
router.get("/AllAppoints", getAlAppoints)



module.exports = router