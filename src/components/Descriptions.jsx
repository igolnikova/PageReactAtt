import React from 'react'
import "../App.css";
import Description from './cart/Description';

const descriptions = (props) => {
  return (
    <div>
       <Description item={props.item} />
    </div>
  )
}


export default descriptions