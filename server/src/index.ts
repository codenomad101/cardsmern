import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import Deck from "./models/Deck";
import { config } from "dotenv";
import cors from "cors";
import { getDecksController } from "./controllers/getDeckController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
config();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);



app.get("/decks", getDecksController);

app.post("/decks", createDeckController);

app.delete('/decks/:deckId',deleteDeckController);



mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
