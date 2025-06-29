import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userActions";
const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user));
  };
  return (
    <form onSubmit={handleSubmit(LoginHandler)} className="flex justify-start items-start flex-col w-1/2">
      
       <input
        {...register("email")}
        type="email"
        placeholder="JohnDoe@.com"
        className="mb-3 outline-0 border-b p-2 text-4xl"
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="mb-3 outline-0 border-b p-2 text-4xl"
      />
      <button className="mt-5 px-4 py-2 bg-blue-400 rounded ">Login User</button>
      <p className="mt-5 " >Don't have an account? <Link className="text-blue-400  " to="/register">Register</Link></p>
    </form>
  );
};

export default Login;
