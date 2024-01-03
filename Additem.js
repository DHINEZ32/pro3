import React from "react"
import { useRef } from "react"

const Additem = ({newItem,setNewItem,submit}) => {
  const myRef=useRef()
  return (
      <form className='addForm' onSubmit={submit}>          
        <label htmlFor="addItem"></label>
        <input type="text"
        autoFocus
        ref={myRef}
        id='addItem'
        placeholder='Add'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)} />
        
        <button
        type='submit'
        aria-label='Add Item'
        onClick={()=>myRef.current.focus()}>Submit</button>
      </form>
      )
}

export default Additem