import { API_URL } from "./config";
export async function createDecks(title:string) {
    
   const response=await fetch(`${API_URL}/decks`, {
      method: "POST",
      headers:{
            "content-type":'application/json',
      },
      body: JSON.stringify({ title
      }),
    });
   return response.json();
  }