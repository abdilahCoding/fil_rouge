const express = require("express")
const {getAllPatients,PatinetInsert,findPatient} = require('../controllers/patientContoller')
const router = express.Router()
const {userAth} = require('../middlewares/auth')


router.get("/allPatient",userAth,getAllPatients)
router.post("/findPatient",findPatient)
router.post("/insertPatient", PatinetInsert)




module.exports = router