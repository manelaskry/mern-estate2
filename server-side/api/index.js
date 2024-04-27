import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from '../routes/user.route.js';
import authRouter from '../routes/auth.route.js';
dotenv.config();


const app = express();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to Mongodb")
})
.catch((err)=>{
    console.log("err")
});

app.use(express.json());

app.use("/api/user",UserRouter);
app.use("/api/auth",authRouter);


app.listen(3000, ()=>{
    console.log('server running on port 3000');
});
