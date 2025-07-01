import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const user = useSelector((state)=> state.userReducer.users );
  return (
    <nav className="flex mb-10 justify-center items-center gap-x-5 p-5">
        <NavLink to="/" >Home</NavLink>
 
         {user ? <>
         <NavLink to="/admin/create-product">Create Product</NavLink>
         <NavLink to="/admin/user-profile">Setting</NavLink>
         </>:<>
         <NavLink to="/login">Login</NavLink>
         </>}
    </nav>
  )
}

export default Nav