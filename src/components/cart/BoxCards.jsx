import React from 'react';
import BoxItem from './BoxItem';
import "../../App.css";

const BoxCards = (props) => {
  return (
    <div className="container py-3 cards_cont">
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 ry-3">   
        {
          props.item.map(obj=> {
            return (
              <BoxItem
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                title={obj.title}
                img={obj.img}
                
              />
            )
          })    
        }
      </div>
    </div>      
  )
}

export default BoxCards