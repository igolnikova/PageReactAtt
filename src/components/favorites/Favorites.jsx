import React from 'react'
import axios from 'axios'
import {AppContext} from '../../App'
import Item from './Item'

const Favorites = (props) => {

  const context = React.createContext(AppContext)

  const onDeleteFav =(id)=>{
    
    axios.delete(`https://642aa329b11efeb7599e5487.mockapi.io/favorites/${id}`)
    props.setFavorites((fav) => fav.filter(item => item.id !==id));
}

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

  return (
    <div>
      <div>
        <h1 className='col-md-8 offset-md-2'>Избранные товары</h1>
      </div>
    <div>
      {
        props.favorites.map(obj =>{
          return(
            <Item
            key={obj.id}
            id={obj.id}
            myId={obj.myId}
            title={obj.title}
            description={obj.description}
            price={obj.price}
            img={obj.img}
            
            onDeleteFav={
              (id)=>{
                onDeleteFav(id)
              }
            }

            onPlus={(cartobj)=>{
              onAddOverlay(cartobj)
            }
          }
            />

          )
        })
      }
      
    </div>

    </div>

  )
}

export default Favorites