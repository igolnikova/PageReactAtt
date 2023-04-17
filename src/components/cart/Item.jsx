import React from 'react'
import "../../App.css";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import { useState } from 'react'
import { AppContext } from '../../App';


const Item = (props) => {
  
  const context = React.useContext(AppContext)

    const [added, setAdded ] = useState(context.isAdded);
    const [fav, setFav ] = useState(false);

    const onClickFav =()=>{
        setFav(!fav);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;
        let box = props.box;
        props.favBtn({title, description, price, img,id, myId, box});
    }

    const onClickAdd =()=>{
        setAdded(!added);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;
        let box = props.box;
        props.onPlus({title, description, price, img,id, myId, box});
    }

    
  return (
    
     <div className="col">
       <Card>         
       <div className='cart_icons'>
          {
            context.isAdded(props.myId) == true ?
            <img width={40} src={"/img/cart_green.png"}  onClick={onClickAdd} title="Удалить из корзины"/>
            :
            <img width={40} src={"/img/cart_grey.png"}  onClick={onClickAdd} title="Добавить в корзину"/>
         }
        </div> 
        <div className='heart_icons'>
          {
           context.isFav(props.myId) == true ?
            <img width={40} src={"/img/heart_red.png"}  onClick={onClickFav} title="Удалить из избранного"/>
            :
            <img width={40} src={"/img/hearth_grey.png"}  onClick={onClickFav} title="Добавить в избранное"></img>
          }
        </div>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>   
            <Card.Text><p className='price'>{props.price} руб.</p></Card.Text>  
            {/* <Card.Text><p className='id'>id - {props.id}</p></Card.Text>  
            <Card.Text><p className='box'>box - {props.box}</p></Card.Text>   */}
          </Card.Body>     
          {/* <Link to={`/catalog/${props.box}/${props.myId}`}>
              <p className='card-footer desc_link'>Подробнее</p>
            </Link>     */}

          {/* <a href="/catalog" class="card-footer">Подробнее</a>         */}
       </Card>           
   </div>   
  )
}

export default Item