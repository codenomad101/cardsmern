import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import Deck from "./models/Deck";
import { config } from "dotenv";
import cors from "cors";
config();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);



app.get("/decks", async (req: Request, res: Response) => {
  //fetch all decks and send all decks to user

  const decks = await Deck.find();
  res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const newDec = new Deck({
    title: req.body.title,
  });
  const createdDec = await newDec.save();
  res.json(createdDec);
});

app.delete('/decks/:deckId',async (req:Request,res:Response)=>{
const deckId=req.params.deckId;
const deck =await Deck.findByIdAndDelete(deckId);

res.json(deck)

})







mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
