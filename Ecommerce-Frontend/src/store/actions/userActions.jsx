import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice";


export const asynccurrentuser =()=>async(dispatch,getState)=>{
    try{
          const user = JSON.parse(localStorage.getItem("user"));
          if(user) dispatch(loaduser(user));
          else console.log("User Not Logged in!")
         
    }catch(error){
      console.error(error)
    }
}

export const asyncloginuser =(user)=>async(dispatchEvent,getState)=>{
    try{
          const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
          localStorage.setItem("user",JSON.stringify(data[0]));
    }catch(error){
      console.error(error)
    }
}

export const asynclogoutuser =()=>async(dispatchEvent,getState)=>{
    try{
        localStorage.removeItem("user");
        console.log("User logged out ")
    }catch(error){
      console.error(error)
    }
}
export const asyncregisteruser =(user)=>async(dispatchEvent,getState)=>{
    try{
            const res = await axios.post("/users",user);
            console.log(res);
    }catch(error){
      console.error(error)
    }
}