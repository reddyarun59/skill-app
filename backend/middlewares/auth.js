const User = require("../models/user")
const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const protect= asyncHandler(async(req, res, next)=>{

    let token=req.cookies.token

    if (!token && req.header("Authorization")) {
        token = req.header("Authorization").replace("Bearer ", "");
    }


        try {
            
            const decoded= jwt.verify(token, process.env.JWT_SECRET)
    
            req.user=await User.findById(decoded.id)
    
            next()
    
        } catch (error) {     
            res.status(401)
            throw new Error("Not Authorized, token failed")
        }

    if(!token){
        res.status(401)
        throw new Error("Not Authorized, No Token")
    }
})

module.exports = { protect }