import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./Routes/user.route.js";
import cookieParser from "cookie-parser";

dotenv.config({});

connectDB();
const app=express();
//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}));
//apis
app.use("/api/v1/user",userRoute);



const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`);
})