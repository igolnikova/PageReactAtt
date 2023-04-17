import React from 'react'
import Cards from './cart/BoxCards';
import "../App.css";

const home = (props) => {
  return (
    <div>
       <Cards item={props.item}/>
    </div>
  )
}

export default home