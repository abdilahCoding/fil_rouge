const express = require("express")
const {UserSignin, UserSingup,getAllUsers,deleteUser} = require('../controllers/userController')
const {userAth} = require('../middlewares/auth')
const router = express.Router()


router.post("/singnup", UserSingup)
router.post("/singnin", UserSignin)
router.get("/allUsers",userAth,getAllUsers)
router.post("/deleteUser", deleteUser)




module.exports = router