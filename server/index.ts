require('dotenv').config();
//const express = require('express');
import express, {request, Response} from "express"
import { exit } from "process";
import authRouter from './routes/auth'

const morgan = require('morgan')
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();

app.use(morgan(`conbined`));
app.use(helmet());
app.use(express.json());


mongoose.connect(`${process.env.MONGO_DB}`,{
    useNewUrlParser: true
},(error: any) => {
    if(error){
        console.log('Error:' + error)
    }
    else
    {
        console.log("DB connect")
    } 
});


app.get('/', (request, response)=>{
    response.status(200).send('Hello World boyz n gals ');
});

app.use('/auth', authRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log(`Server Running on http://localhost:${process.env.APP_PORT}`);
});