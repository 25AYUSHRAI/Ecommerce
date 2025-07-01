import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from "../../store/actions/userActions";
const UserProfile = () => {
 
  const navigate = useNavigate();
  const { userReducer:{users}} = useSelector((state) => state);
   const { register, reset, handleSubmit } = useForm({
    defaultValues:{
      username: users?.username,
      email:users?.email,
      password:users?.password
    }
   });
  const dispatch = useDispatch();
  
  const UpdateUserHandler = (user) => {
   dispatch(asyncupdateuser(users.id,user))
  };
 const LogoutUser = ()=>{
  dispatch(asynclogoutuser());
  navigate("/login");
 }
const DeleteHandler = ()=>
{
 dispatch(asyncdeleteuser(users.id))
 navigate("/login"); 
}


  return users ? (
    <>
      {users && <div>
            <h1 className="font-thin text-5xl">{users.username}</h1>
            <h1 className="font-thin text-3xl">{users.email}</h1>
         <hr className="my-10" />
          <form
            onSubmit={handleSubmit(UpdateUserHandler)}
            className="flex justify-start items-start flex-col w-1/2"
          >
            <input
              {...register("username")}
              className="mb-3 outline-0 border-b p-2 text-4xl"
              type="text"
              placeholder="User Name"
            />

            <input
              {...register("email")}
              type="text"
              placeholder="email"
              className="mb-3 outline-0 border-b p-2 text-4xl"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="mb-3 outline-0 border-b p-2 text-4xl"
            />
            <button className="mt-5 px-4 py-2 bg-blue-400 rounded ">
             Update user
            </button>
            <button type="button" onClick={DeleteHandler} className="mt-5 px-4 py-2 bg-red-600 rounded">Delete User</button>
            <button type="button" onClick={LogoutUser} className="mt-5 px-4 py-2 bg-red-400 rounded">Logout User</button>
          </form>

        </div>
       }
    </>
  ):"Loading...";
};

export default UserProfile;
