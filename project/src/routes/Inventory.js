import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';

function Inventory() {
 
  const [quest,setquest]= useState([]);
  
  
  useEffect(()=>{
    axios.get("http://localhost:5000/clients").then((Response)=>{
      setquest(Response.data)
    })
 } ,[])
  
 
  return (
  <>
  <div>
  {quest.map((user) => {
return (
  <div>
  <h1> name is {user.id}</h1>
  <h1>age is {user.name}</h1>
  <h1>usernmae is {user.surname}</h1>
  </div>
)
    }
  )}
    </div>
    
 
    
    
    </>
  )
}

export default Inventory
