const express = require("express")
const {LabPharSignin,LabPhaSingup} = require('../controllers/labopharController')
const router = express.Router()


router.post("/laboSingnin", LabPharSignin)
router.post("/laboSingnup", LabPhaSingup)




module.exports = router