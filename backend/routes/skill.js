const express = require('express')
const { addSkill, getSkills } = require('../controllers/skillController')
const { protect } = require('../middlewares/auth')

const router=express.Router()

router.route("/addskill").post(protect, addSkill)
router.route("/getskills").get(protect, getSkills)

module.exports=router