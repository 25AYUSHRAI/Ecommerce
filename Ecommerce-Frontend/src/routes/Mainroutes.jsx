import { Routes,Route } from 'react-router-dom'
import Home from "../pages/Home"
import Products from '../pages/Products'
import Login from '../pages/Login'
import PageNotFound from "../PageNotFound"
import Register from "../pages/Register"
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'
import { useSelector } from 'react-redux'
import UserProfile from '../pages/user/UserProfile'
import AuthWrapper from './AuthWrapper'
const Mainroutes = () => {
  
  console.log(users)
  return <Routes> 
    <Route path='/' element={<Products/>}></Route>
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/admin/create-product' element={<AuthWrapper>
      <CreateProduct/>
    </AuthWrapper>}></Route>
    <Route path='/admin/user-profile' element={<AuthWrapper>
      <UserProfile/>
    </AuthWrapper>}></Route>
    <Route path='/product/:id' element={<AuthWrapper>
      <ProductDetails/>
    </AuthWrapper>}></Route>

    </Routes>
}

export default Mainroutes