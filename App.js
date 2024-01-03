import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState,useEffect } from "react";
import Additem from "./Additem";
import Search from "./Search";  
import Apireq from './Apireq';

function App(){
  const [items,setItems]=useState([]);
  const [newItem,setNewItem]=useState('')
  const[search,setSearch]=useState('')
  const[fetchError,setFetchError]=useState(null)
  const api=' http://localhost:3500';
  useEffect(()=>{
    const fetchItem=async()=>{
      try{
        const response=fetch(api);
        const listItems=await response.json();
        setItems(listItems);

      }catch(err){
        console.log(err.stack)
      }
    }
  },[])
  const additem=async(item)=>{
    const id=items.length?items[items.length-1].id+1:1;
    const addNewItem={id,checked:false,item};
    const listItem=[...item,addNewItem];
    setNewItem(listItem);
  const postOption={
    method:'post',
    header:{
      'content-type':'application/json'
    },
    body:JSON.stringify(addNewItem)
  }
  const result=await Apireq(api,postOption);

  if(result)setFetchError(result)
}
  const click=async(id)=>{
    const list=items.map((y)=>y.id===id? {...y,checked:!y.checked}:y);
    setItems(list);

  const myItem=list.filter((item)=>item.id===id);
  const updateOption={
    method:'PATCH',
    header:{
      'content-type':'application/json'
    },
    body:JSON.stringify({checked:myItem[0].checked})
  }
  const reqUrl='${api}/${id}'
  const result=await Apireq(reqUrl,updateOption);
   if(result)setFetchError(result)
}
    const del=async(id)=>{
      const list=items.filter((z)=>
      z.id !== id)
      setItems(list);
      const deleteOptions={
        method:'DELETE'
      };
      const reqUrl='${api}/${id}';
      const result= await Apireq(reqUrl,deleteOptions);
      

  }  

const submit=(e)=>{
  e.preventDefault();
  if(!newItem)return;
  console.log(newItem)
  additem(newItem);
  setNewItem('');
}
 
  return(
      
    
    <div className="App">
      <Header title="TO DO LIST" />
      <Additem 
      newItem={newItem}
      setNewItem={setNewItem}
      submit={submit}
      
      />
      <Search 
      search={search}
      setSearch={setSearch}
      />

      <Content 
      items={items}
      setItems={setItems}
      click={click}
      />
      <Footer 
      length={items.length}
      />
     
    </div>

  );
    
  }
  export default App;

