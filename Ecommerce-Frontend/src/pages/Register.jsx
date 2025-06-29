import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userActions";
import { useDispatch } from "react-redux"
const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin=false;
    dispatch(asyncregisteruser(user));
    navigate("/login");
  };
  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className="flex justify-start items-start flex-col w-1/2">
      <input
        {...register("username")}
        type="text"
        placeholder="John-Doe"
        className="mb-3 outline-0 border-b p-2 text-4xl"
      />
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
      <button className="mt-5 px-4 py-2 bg-blue-400 rounded ">Register User</button>
      <p className="mt-5">Already have an account?  <Link className="text-blue-400  " to="/login">Login</Link></p>
    </form>
  );
};

export default Register;
