import React from 'react'
import "../App.css";
import Slider from './Slider';
import Cards from './cart/Cards';


const home = (props) => {
  return (
    <div>
      <Slider/>
      <Cards item={props.item} overlayItems={props.overlayItems}
        setOverlayItems={props.setOverlayItems}
        favorites={props.favorites}
        setFavorites={props.setFavorites}/>       
    </div>
  )
}

export default home