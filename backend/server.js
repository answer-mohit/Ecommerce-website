import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import cors from 'cors';
import productRouter from './routers/productRouter.js';
import UserRouter from './routers/UserRouter.js';
const port =process.env.PORT||5000;
dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
// const express=require('express');
mongoose.connect(process.env.URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('database connect')).catch((err)=>console.log(`database ir not connected ${err} `));

app.get('/',(req,res)=>{
    res.send('server is ready');
});
app.use('/api/users',UserRouter);
app.use('/api/products/',productRouter)

app.listen(port,()=>{
    console.log('server is runing ');
})