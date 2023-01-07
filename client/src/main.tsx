import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Deck from './Deck'

import { createBrowserRouter,RouterProvider ,Route} from 'react-router-dom';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
  path:'/decks/:deckId',
  element:<Deck />
  },
  
  {
    path:"*",
    element:<div> 404 page not found<br/>
      Hey, you have encountered an error, please check the code</div>
  }


])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
 </React.StrictMode>,
)
