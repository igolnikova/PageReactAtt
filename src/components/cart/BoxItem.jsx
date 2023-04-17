import React from 'react'
import Card from 'react-bootstrap/Card';
import "../../App.css";
import {Link} from 'react-router-dom';
import Favorites from '../../components/favorites/Favorites'
import Basket from '../../components/basket/Basket'
import axios from 'axios'

const BoxItem = (props) => {

  
  const onAddOverlay = async (obj)=>{
    try{
      const findOverlay = props.overlayItems.find(objOver=> objOver.myId === obj.myId)
      if(findOverlay){
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findOverlay.id}`)
        props.setOverlayItems((over) => over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj)
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
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findFavorites.id}`)
        props.setFavorites((over) => over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }

  
  return (
    
      <div className="col">       
          <Card>
            <Link to={`/catalog/${props.id}`}>
               <Card.Img variant="top" src={props.img} />
            </Link>    
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>                
            </Card.Body>                 
          </Card>  
            
      </div>                
   
  )
}

export default BoxItem