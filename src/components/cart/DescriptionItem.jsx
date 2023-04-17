import React from 'react'
import "../../App.css";
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { AppContext } from '../../App';

const DescriptionItem = (props) => {

  const context = React.useContext(AppContext)

  return (
   
      <div className="col">
       <h5>Подробное описание товара</h5>
        {
          context.isDesc(props.myId) == true ?
          <Card>
          <div className='cart_icons'>        
          </div>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>   
              <Card.Text><p className='price'>{props.price} руб.</p></Card.Text>  
            </Card.Body>  
          </Card>   

            :<p>Error</p> 
          }
               
    </div>  

    
  )
}

// const Img = ({ match }) => (
//   <div>
//     <h3>IMAGE ID: {match.params.imgId}</h3>
//   </div>
// );

export default DescriptionItem