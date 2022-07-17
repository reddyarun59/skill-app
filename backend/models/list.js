const mongoose = require('mongoose')

const listSchema =mongoose.Schema({
    
    skill:[
            {
                type:String,
            }
    ]
})

const List =mongoose.model("List", listSchema)

module.exports=List