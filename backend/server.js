//package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


//file imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";

//variables
const app=express();
const PORT = process.env.PORT || 5000;


dotenv.config();

//MIDDLEWARES
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());


// app.get("/",(req,res)=>{
//     //root route http://localhost:5000/
//     res.send("hello world");
// })


//MIDDLEWARES
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running on port ${PORT}`);
})