const User = require("../models/user")
const asyncHandler = require("express-async-handler")

const signup=asyncHandler(async(req,res)=>{

    const {name, email, password} = req.body

    if(!name|| !email|| !password){
        res.status(400)
        throw new Error("please fill all the fields")
    }

    const userExists=await User.findOne({ email})

    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    const token=user.getJwtToken()

    const options={
        expires:new Date(Date.now() + 30 *24 * 60 * 60 * 1000),
        httpOnly:true
    }

    if(user){
        res.status(200).cookie("token", token, options).json({
            token,
            user
        })
    }
})

const signin=asyncHandler(async(req, res)=>{

    const {email,password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("Please fill all the fields")
    }

    const user=await User.findOne({email}).select("+password")

    if(!user){
        res.status(400)
        throw new Error("Email or Password does not match or exist")
    }

    const isPasswordCorrect= await user.isValidatePassword(password)

    if(!isPasswordCorrect){
        res.status(400)
        throw new Error("Email or Password does not match or exist")
    }

    const token=user.getJwtToken()

    const options={
        expires:new Date(Date.now() + 30 *24 * 60 * 60 * 1000),
        httpOnly:true
    }

    if(user && isPasswordCorrect){
        res.status(200).cookie("token", token, options).json({
            token,
            user
        })
    }
})

const logout=asyncHandler(async(req, res)=>{

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly:true,
    })

    res.status(200).json({
        message:"User Logged Out Successfully"
    })
})

module.exports={
    signup,
    signin,
    logout
}