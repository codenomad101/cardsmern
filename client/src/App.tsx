import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {Link } from 'react-router-dom';
import { DeleteDeck } from "./api/deleteDeck";
import { getDecks } from "./api/getDecks";
import { TDeck } from "./api/getDecks";
import { createDecks } from "./api/createDecks";


function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks]=useState<TDeck[]>([]);
  async function createDeck(e: React.FormEvent) {
    e.preventDefault
   const deck=await createDecks(title);
   setDecks([...decks,deck]);
    setTitle('');
  }
async function handleDeleteDeck(deckId:string){
 DeleteDeck(deckId);
  setDecks(decks.filter(deck=>deck._id!==deckId));
}
  useEffect(()=>{
    async function fetchDesks(){
      
      const newDecks=await getDecks();
      setDecks(newDecks);
    }
   fetchDesks();
  },[]);

  console.log(title)
  return (
    <div className="App" >
    <div className='decks'>
     {
      decks.map((deck)=>(
        <li key={deck._id}>
        <button onClick={()=>handleDeleteDeck(deck._id)}>X</button>
        <Link to={`decks/${deck._id}`}>{deck.title}</Link>
        </li>
      ))
     }
    </div>
      <form onSubmit={createDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
         <button className="button">Create Deck</button>
      </form>
     
    </div>
  );
}

export default App;
