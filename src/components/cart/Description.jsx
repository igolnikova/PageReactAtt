import React from 'react'
import "../../App.css";
import DescriptionItem from './DescriptionItem';
const Description = (props) => {

   return (
    <div className="container py-3 cards_cont">
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 ry-3">   
        {
          props.item.map(obj=> {
            return (
              <DescriptionItem
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                title={obj.title}
                price={obj.price}
                img={obj.img}
                box={obj.box}   
              />
            )
          })    
        }
      </div>
    </div>   
  )

  
}

export default Description