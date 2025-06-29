import React, { useEffect } from 'react'
import axios from "../src/api/axiosconfig"
const App = () => {
   const getproducts = async ()=>{
    try{
      const res= await axios.get("/products");
      console.log(res)
    }
    catch(error){
        console.log(error);
    }
   }
   useEffect(()=>{getproducts()},[])
  return (
    <div>App</div>
  )
}

export default App