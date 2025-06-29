import axios from "../api/axiosconfig";
import { loaduser } from "./userSlice";
export const asyncgetusers =()=> async (dispatch,getState) =>{
    try{
        const res = await axios.get("/users");
        console.log("Current State : >>>>",getState());
        dispatch(loaduser(res.data))
    }catch(error){
        console.log(error);
    }
};