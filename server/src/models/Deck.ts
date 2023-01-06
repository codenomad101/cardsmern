import mongoose from "mongoose";

const Schema=mongoose.Schema;
//const ObectId=mongoose.Types.ObjectId;

const DeckSchema=new Schema({
    title:String,

})

const DeckModel = mongoose.model('Deck', DeckSchema);
export default DeckModel;