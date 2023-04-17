import React from 'react'
import Cards from './cart/Cards';
import "../App.css";

const catalog = (props) => {
  return (
    <div>
       <Cards item={props.item} overlayItems={props.overlayItems}
        setOverlayItems={props.setOverlayItems}
        favorites={props.favorites}
        setFavorites={props.setFavorites}/>
    </div>
  )
}

export default catalog