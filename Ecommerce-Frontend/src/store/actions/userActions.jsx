import axios from "../../api/axiosconfig"
import { loaduser, removeuser } from "../reducers/userSlice";


export const asynccurrentuser =()=>async(dispatch,getState)=>{
    try{
          const user = JSON.parse(localStorage.getItem("user"));
          dispatch(loaduser(user));
  
         
    }catch(error){
      console.error(error)
    }
}

export const asyncloginuser =(user)=>async(dispatch,getState)=>{
    try{
          const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
          localStorage.setItem("user",JSON.stringify(data[0]));
          dispatch(loaduser(data[0]));
    }catch(error){
      console.error(error)
    }
}

export const asynclogoutuser =()=>async(dispatch,getState)=>{
    try{
        localStorage.removeItem("user");
        dispatch(removeuser());
    }catch(error){
      console.error(error)
    }
}
export const asyncregisteruser =(user)=>async(dispatch,getState)=>{
    try{
            const res = await axios.post("/users",user);
          
    }catch(error){
      console.error(error)
    }
}
export const asyncupdateuser =(id,user)=>async(dispatch,getState)=>{
  try{
        const {data}=await axios.patch("/users/"+id,user);
        localStorage.setItem("user",JSON.stringify(data));
  }catch(error){
    console.error(error)
  }
}
export const asyncdeleteuser =(id)=>async(dispatch,getState)=>{
  try{
        await axios.delete("/users/"+id);
        dispatch(asynclogoutuser());
  }catch(error){
    console.error(error)
  }
}