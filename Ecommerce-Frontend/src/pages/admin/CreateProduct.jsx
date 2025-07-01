import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/actions/productActions";
const CreateProduct= () => {
  const { register, reset, handleSubmit } = useForm();
 const navigate = useNavigate();
  const dispatch = useDispatch();
  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product)
    dispatch(asynccreateproduct(product))
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(CreateProductHandler)} className="flex justify-start items-start flex-col w-1/2">
      <input 
      {...register("image")} 
      className="mb-3 outline-0 border-b p-2 text-4xl"
      type="url" 
      placeholder="Image Url"
      />
      
      <input
        {...register("title")}
        type="text"
        placeholder="title"
        className="mb-3 outline-0 border-b p-2 text-4xl"
      />
      <input
        {...register("price")}
        type="number"
        placeholder="number"
        className="mb-3 outline-0 border-b p-2 text-4xl"
      />
     <textarea 
         {...register("discription")}
        
        placeholder="discription"
        className="mb-3 outline-0 border-b p-2 text-4xl" ></textarea>
          <input
        {...register("category")}
        type="text"
        placeholder="category"
        className="mb-3 outline-0 border-b p-2 text-4xl"
      />
      <button className="mt-5 px-4 py-2 bg-blue-400 rounded ">Create Product</button>
    </form>
  );
};

export default CreateProduct;
