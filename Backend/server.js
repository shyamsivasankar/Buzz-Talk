import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from "./Routes/auth.routes.js"
import messageRoutes from "./Routes/message.routes.js"
import userRoutes from "./Routes/user.routes.js"

import connectToMongoDB from './db/connectToMongoDB.js'


const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use("/auth/api",authRoutes) 
app.use("/api/messages",messageRoutes) 
app.use("/api/users",userRoutes) 


// app.get("/",(req,res)=>  {
//     res.send("Hello world!")
// })

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
})