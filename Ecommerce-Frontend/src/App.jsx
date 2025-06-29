import React, { useEffect } from 'react'
import { asyncgetusers } from './store/userActions'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
   const dispatch = useDispatch();
   const data = useSelector((state)=>state)
   console.log(data)
   useEffect(()=>{
   dispatch(asyncgetusers());
   },[])
  return (
    <div>App</div>
  )
}

export default App