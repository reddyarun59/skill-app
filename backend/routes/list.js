const express = require('express')
const { addSkillToList } = require('../controllers/listController')

const router=express.Router()

router.route("/addskilltolist").post(addSkillToList)

module.exports=router