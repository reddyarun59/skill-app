const mongoose= require('mongoose')
const validator = require('validator')
const jwt=require('jsonwebtoken')
const bcrypt= require('bcryptjs')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "Please provide a name"],
    },

    email:{
        type:String,
        required:[true, "Please provide a email"],
        validate:[validator.isEmail, "Please provide a valid email"],
        unique:true,
    },

    password:{
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "password should be atleast 6 char"],
        select:false,
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

userSchema.pre("save", async function(){
    this.password= await bcrypt.hash(this.password, 10)
})

userSchema.methods.isValidatePassword=async function(userSendPassword) {
    return await bcrypt.compare(userSendPassword, this.password)
}

userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRY
    })
}

const User=mongoose.model("User", userSchema)

module.exports=User