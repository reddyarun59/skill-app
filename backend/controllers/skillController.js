const asyncHandler=require('express-async-handler')
const Skill = require('../models/skill')

const addSkill=asyncHandler(async(req, res)=>{

    const { skill, expert, level, proficiency, experience } = req.body
    const user=req.user._id

    const skilll=await Skill.create({
        skill, 
        expert, 
        level, 
        proficiency, 
        experience,
        user
    })

    res.status(200).json({
        skilll
    })
})

const getSkills=asyncHandler(async(req, res)=>{
    const skills=await Skill.find({
        user: req.user._id
    })

    res.status(200).json({
        skills
    })
})

module.exports={
    addSkill,
    getSkills
}