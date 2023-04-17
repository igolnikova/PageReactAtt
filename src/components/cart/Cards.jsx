import React from 'react'
import "../../App.css";
import Item from './Item';
import axios from 'axios'

const Cards = (props) => {

  const onAddOverlay = async (obj)=>{
    try{
      const findOverlay = props.overlayItems.find(objOver=> objOver.myId === obj.myId)
      if(findOverlay){
        axios.delete(`https://642aa329b11efeb7599e5487.mockapi.io/cart/${findOverlay.id}`)
        props.setOverlayItems((over) => over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://642aa329b11efeb7599e5487.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }

  const onAddFav = async (obj)=>{
    try{
      const findFavorites = props.favorites.find(objFav=> objFav.myId === obj.myId)
      if(findFavorites){
        axios.delete(`https://642aa329b11efeb7599e5487.mockapi.io/favorites/${findFavorites.id}`)
        props.setFavorites((over) => over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://642aa329b11efeb7599e5487.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }
  
  return (
       <div className="container py-3 cards_cont">
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 ry-3">   
        {
          props.item.map(obj=> {
            return (
              <Item
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                title={obj.title}
                price={obj.price}
                img={obj.img}
                box={obj.box}

                
                favBtn={
                  (favObj)=>{
                    onAddFav(favObj)
                  }
                 }
      
                 onPlus={(cartObj)=>{
                  onAddOverlay(cartObj)
                 }}
              />
            )
          })    
        }
      </div>
    </div>   
  )
}

export default Cards