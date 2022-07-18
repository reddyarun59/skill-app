const cookieParser = require('cookie-parser');
const express=require('express');
const connectDB = require('./backend/configs/db');
const { errorHandler } = require('./backend/middlewares/errorHandler');
const dotenv = require('dotenv').config()

const port=process.env.PORT || 5000;

const app=express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(cookieParser())

app.use("/api/v1", require("./backend/routes/user"))
app.use("/api/v1", require("./backend/routes/list"))
app.use("/api/v1", require("./backend/routes/skill"))


app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})