import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  async function createDeck(e: React.FormEvent) {
    e.preventDefault();
   await  fetch("http://localhost:5000/decks", {
      method: "POST",
      headers:{
            "content-type":'application/json',
      },
      body: JSON.stringify({ title 
      }),
    });
    setTitle('');
  }
  console.log(title)
  return (
    <div className="App" style={{ display: "flex" }}>
      <form onSubmit={createDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
         <button>Create Deck</button>
      </form>
     
    </div>
  );
}

export default App;
