const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    
    skill:{
            type:mongoose.Schema.types.ObjectId,
            ref:"List"
        },

    expert:{
        type:Boolean,
        default:false,
    },

    level:{
        type:Number,
        default:0,
    },

    proficiency:{
        type:Number,
        default:0,
    },

    experience:{
        type:Number,
        default:0,
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

})

const Skill=mongoose.model("Skill", skillSchema);

module.exports = Skill