import React from "react"
import Item from "./Item"


const Itemslist = ({items,click}) => {
  return (
    <ul>
        {
          items.map((item)=>(
           <Item 

           key={item.id}
           item={item}
           click={click}
           />
          )           
            
            )
        }
      </ul>
  )
}

export default Itemslist