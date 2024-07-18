import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();

//Port
const Port = process.env.PORT || 5000;

//App
const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser())

//Routes

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use('/api/users', userRoutes)



//Listen to Server
app.listen(Port,()=>{
    connectToMongoDB();
    console.log(`App listening on Port- ${Port} `)
})