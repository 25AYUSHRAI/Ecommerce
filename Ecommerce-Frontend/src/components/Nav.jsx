import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex mb-10 justify-center items-center gap-x-5 p-5">
        <NavLink to="/" >Home</NavLink>
         <NavLink to="/products">Products</NavLink>
         <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Nav