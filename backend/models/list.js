const mongoose = require('mongoose')

const listSchema =mongoose.Schema({
    
    skill:[
            {
                type:String,
            }
    ]
})

const List =mongoose.Schema("List", listSchema)

module.exports=List