import React from 'react'
import ItemBasket from './ItemBasket'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Basket = (props) => {
  return (
    <div  className='favor'>
      <div>
        <h1 className='col-md-8 offset-md-2'>Корзина</h1>
      </div>
      <div className='basket'>
        {
          props.overlayProp.length>0?
          <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center basket_card'>
            {
              props.overlayProp.map(obj =>{
                return(
                 <ItemBasket
                 key={obj.id}
                 id={obj.id}
                 title={obj.title} 
                 price={obj.price}
                 img={obj.img}
                 deleteItems={props.deleteItems}
                 />
                )
              })
            }
          </div>
            :<h1 className='col-md-8 offset-md-2'></h1>
        }
        {
           props.overlayProp.length>0?

           <Card className='itog'>
            <Card.Body>
              <Card.Title>Итого: {props.totalPrice} руб.</Card.Title>          
              <Button variant="success">Забронировать</Button>
            </Card.Body>
          </Card>
          :<h1 className='col-md-8 offset-md-2'></h1>
        }
        
      </div>
    </div>
  )
}

export default Basket