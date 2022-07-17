const List= require("../models/list")
const asyncHandler= require("express-async-handler")

const addSkillToList=asyncHandler(async(req, res)=>{
    const {skill} = req.body

    const list=await List.create({
        skill
    })
})

module.exports={
    addSkillToList
}