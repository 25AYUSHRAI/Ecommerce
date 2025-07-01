import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes';
import Nav from './components/Nav';
import { asynccurrentuser } from './store/actions/userActions';
import { useDispatch } from 'react-redux';
import { asyncloadproducts } from './store/actions/productActions';

const App = () => {
  const dispatch = useDispatch(); 
  useEffect(()=>{
     dispatch(asynccurrentuser());
     dispatch(asyncloadproducts());
   },[])
  return (
    <div className='overflow-auto px-[10%] w-screen h-screen text-white font-thin bg-gray-800'>
       <Nav/>
       <Mainroutes/>
    </div>
  )
}

export default App