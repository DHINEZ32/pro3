import React from "react"

const search = ({search,setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e=>e.preventDefault())}>
        <label htmlFor="search">search</label>
        <input type="text"id="search"
        role="searchbox"
        placeholder="search"
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}/>


    </form>
  )
}

export default search