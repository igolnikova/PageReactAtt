import React, {useState} from 'react'
import { AppContext } from '../../App';
import "../../App.css";

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
    <div className='row row-cols-1 justify-content-evenly 
        row-cols-md-3 row-cols-sm-2 text-center'>
            <div className='col px-3 py-3'>
                <div className='card md-6 rounded'>
                    <div className='card-header py-2 px-3'>
                        <button type='button' className='w-100 btn btn-lg btn-primary' onClick={onDelete} title="Удалить из избранного">X</button>
                        
                        <p>{props.title}</p>
                        <img className='rounded' src={props.img} width={'85%'}></img>
                        <p>{props.description}</p>
                        <p>{props.price}</p>
                        <div>
                        {
                            context.isAdded(props.myId) == true ?
                            <img width={40} src={"/img/cart_green.png"}  onClick={onClickAdd} title="Удалить из корзины"></img>
                            :
                            <img width={40} src={"/img/cart_grey.png"}  onClick={onClickAdd} title="Добавить в корзину"/>
                        }
                            {/* <button type='button' className='w-100 btn btn-lg btn-primary'
                onClick={onClickAdd} > { added ?  
                <img width={13}
                 src={added ? '/img/icon.png':'' }
                 alt=""/>:'Добавить в корзину' }
               
                </button> */}
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Item