import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js'

dotenv.config();

//Port
const Port = process.env.PORT || 5000;

//App


//Middleware
app.use(express.json());
app.use(cookieParser())

//Routes

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use('/api/users', userRoutes)



//Listen to Server
server.listen(Port,()=>{
    connectToMongoDB();
    console.log(`App listening on Port- ${Port} `)
})