import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/favorites/Favorites'
import Basket from './components/basket/Basket'
import { useState,useEffect} from 'react';
import axios from 'axios';
import "./App.css";
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

export const AppContext = React.createContext({})


function App() {

  const [cards, setCards] = useState([])
  //для избранных 
  const [favorites, setFavorites] = useState([])
  //для корзины
  const [overlayItems, setOverlayItems] = useState([])

  useEffect (()=>{
    async function axiosData() {
      const cardsData = await axios.get('https://run.mocky.io/v3/ebcea9f6-b5e9-42b2-af46-590e452fe5b3')      
      const favoritesData = await axios.get('https://642aa329b11efeb7599e5487.mockapi.io/favorites')
      const cartData = await axios.get('https://642aa329b11efeb7599e5487.mockapi.io/cart')

      setCards(cardsData.data)
      setFavorites(favoritesData.data)
      setOverlayItems(cartData.data)
  }
  
  axiosData();
 
},[])

const deleteItems=(id)=>{
  axios.delete(`https://642aa329b11efeb7599e5487.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFav=(myId)=>{
  return favorites.some((objIsFav)=> objIsFav.myId === myId)
}

const isDesc=(myId)=>{
  return cards.some((objIsDesc)=> objIsDesc.myId === myId)
}

  return (
    
    <AppContext.Provider
    value={
      {
        overlayItems,
        setOverlayItems,
        favorites,
        setFavorites,
        isAdded,
        isFav,
        isDesc
      }
    }>

   <div>
    <Router>
     <Header/>
      <Routes>       
        <Route path="/" element={<Home
                        item={cards} 
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        />}/>      
        <Route path='/favorites' element={<Favorites
                        item={cards}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        />}/> 
        <Route path='/cart' element={<Basket
                        totalPrice={overlayItems.reduce((element = overlayItems.length, obj)=>element+obj.price, 0 )}
                        overlayProp={overlayItems}
                        deleteItems={deleteItems}
                        />}/>

      </Routes>  
      <Footer/>       
    </Router> 
    
   </div>
  </AppContext.Provider>
  )
}

export default App;
