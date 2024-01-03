import React from 'react'
import Itemslist from './Itemslist';
const Content=({items,click})=>{

return (
    <>{
      (items.length) ?
      (
      <Itemslist 
      items={items}
      click={click}
      />
      ):"there  is no list available"}
      
    </>
  )
}

export default Content