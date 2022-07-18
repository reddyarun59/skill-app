const express = require('express')
const { addSkill } = require('../controllers/skillController')
const { protect } = require('../middlewares/auth')

const router=express.Router()

router.route("/createskill").post(protect, addSkill)

module.exports=router