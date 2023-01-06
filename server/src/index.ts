import express, {Request,Response} from 'express';
import mongoose, { mongo } from 'mongoose';
import Deck from './models/Deck';
import {config} from 'dotenv';
import cors from 'cors';
config();
const app=express();

app.use(express.json());
app.use(cors({
    origin:'*'
}));

app.post('/decks',async (req:Request,res:Response)=>{
    console.log(req.body);
    const newDec=new Deck({
        title:req.body.title,
    });
   const createdDec=await newDec.save();
   res.json(createdDec);
})


mongoose.connect(process.env.MONGO_URL!).then(()=>{
console.log("listening on port 5000");   
app.listen(5000);
})

