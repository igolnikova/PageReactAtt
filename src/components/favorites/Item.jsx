import React, {useState} from 'react'
import { AppContext } from '../../App';
import "../../App.css";
import Card from 'react-bootstrap/Card';

const Item = (props) => {

    const context = React.useContext(AppContext)
    const [added, setAdded ] = useState(context.isAdded);
    // const [added, setAdded ] = useState(false);
  
    const onClickAdd =()=>{
        setAdded(!added);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;
        props.onPlus({title, description, price, img,id, myId});
    }


    const onDelete=()=>{
        props.onDeleteFav(props.id)
    }

  return (
    <div className="col">
        <Card>         
            <div className='card md-6 rounded'>
                <div className='card-header py-2 px-3'>
                    <div className='heart_icons'>
                        {
                            <img width={40} src={"/img/th.png"}  onClick={onDelete} title="Удалить из избранного"/>
                        }
                    </div>      
                         <h5>{props.title}</h5>
                        <img className='rounded' src={props.img} width={'85%'}></img>
                        <p>{props.description}</p>
                        <p>{props.price} руб.</p>
                    <div>
                        {
                            context.isAdded(props.myId) == true ?
                            <img width={40} src={"/img/cart_green.png"}  onClick={onClickAdd} title="Удалить из корзины"></img>
                            :
                            <img width={40} src={"/img/cart_grey.png"}  onClick={onClickAdd} title="Добавить в корзину"/>
                        }               
                    </div>                        
                </div>
            </div>
        </Card>           
   </div>   
  )
}

export default Item