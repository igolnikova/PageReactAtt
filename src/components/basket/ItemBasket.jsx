import React from 'react'
import Card from 'react-bootstrap/Card';
import "../../App.css";

const ItemBasket = (props) => {
  return (
       <div className='col'>
            <div className='card md-6 rounded'>
              <div className='heart_icons'>
                  {
                    <img width={40} src={"/img/th.png"}  onClick={()=>props.deleteItems(props.id)} title="Удалить из корзины"/>
                }
                </div> 
                <div className='card-header py-2 px-3'>
                  <h5>{props.title}</h5>
                  <img className='rounded' width={'70%'} src={props.img}></img>
                  <h5>
                    <br/>
                    <span>{props.price}</span>
                  </h5>
                 </div>
             </div>
        </div>
  )
}

export default ItemBasket