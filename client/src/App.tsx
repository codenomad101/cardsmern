import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

type TDeck={
  title:string,
  _id:string
}


function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks]=useState<TDeck[]>([]);
  async function createDeck(e: React.FormEvent) {
    e.preventDefault();
   const response=await fetch("http://localhost:5000/decks", {
      method: "POST",
      headers:{
            "content-type":'application/json',
      },
      body: JSON.stringify({ title
      }),
    });
   const deck=await response.json();
   setDecks([...decks,deck]);
    setTitle('');
  }
async function handleDeleteDeck(deckId:string){
  await fetch(`http://localhost:5000/decks/${deckId}`,{
    method:"DELETE"
  })
  setDecks(decks.filter(deck=>deck._id!==deckId));
}
  useEffect(()=>{
    async function fetchDesks(){
      const response=await fetch("http://localhost:5000/decks");
      const newDecks=await response.json();
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
        <li key={deck._id}>{deck.title}
        <button onClick={()=>handleDeleteDeck(deck._id)}>X</button>
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
