import React from 'react'

const Item = ({item,click}) => {
  return (
    <li className='item' key={item.id}>
           <input type="checkbox"
           checked={item.checked}
           onChange={()=>click(item.id)}
            />
         <label>{item.item}</label>
         <button>Delete</button>
         </li>

  )
}

export default Item