import express, {Request,Response} from 'express';
import mongoose, { mongo } from 'mongoose';
import Deck from './models/Deck';
const app=express();

app.use(express.json());

app.post('/decks',async (req:Request,res:Response)=>{
    console.log(req.body);
    const newDec=new Deck({
        title:req.body.title,
    });
   const createdDec=await newDec.save();
   res.json(createdDec);
})




mongoose.connect("mongodb+srv://dummyuser:dummyuser@cluster0.oknehah.mongodb.net/?retryWrites=true&w=majority").then(()=>{
console.log("listening on port 5000");   
app.listen(5000);
})

