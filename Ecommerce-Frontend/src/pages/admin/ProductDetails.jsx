import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncdeleteproduct, asyncupdateproduct } from "../../store/actions/productActions";
import { useForm } from "react-hook-form";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {productReducer:{products} , userReducer:{users}} = useSelector((state) => state);
  const product = products?.find((product) => product.id === id);
   const { register, reset, handleSubmit } = useForm({
    defaultValues:{
      image: product?.image,
      title:product?.title,
      price:product?.price,
      category:product?.category,
      description:product?.description
    }
   });
  const dispatch = useDispatch();
  
  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id,product))
  };

const DeleteHandler = ()=>
{
  dispatch(asyncdeleteproduct(id))
 navigate("/products"); 
}


  return product ? (
    <>
      <div className="w-full flex">
        <img
          className="w-1/2 h-[60vh] object-cover"
          src={product.image}
          alt=""
        />
        <div className="px-3 w-1/2 h-1/2">
          <h1 className="font-thin text-5xl mb-10 ">{product.title}</h1>
          <h2 className="text-2xl text-green-400 ">{product.price}</h2>
          <p className="mb-5"> {product.description}</p>
          <button>Add to cart</button>
        </div>
        
      </div>
      {users && users.isAdmin && <div>
          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className="flex justify-start items-start flex-col w-1/2"
          >
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
              {...register("description")}
              placeholder="description"
              className="mb-3 outline-0 border-b p-2 text-4xl"
            ></textarea>
            <input
              {...register("category")}
              type="text"
              placeholder="category"
              className="mb-3 outline-0 border-b p-2 text-4xl"
            />
            <button className="mt-5 px-4 py-2 bg-blue-400 rounded ">
              Create Product
            </button>
            <button type="button" onClick={DeleteHandler} className="mt-5 px-4 py-2 bg-red-400 rounded">Delete Products</button>
          </form>

        </div>
       }
    </>
  ):"Loading...";
};

export default ProductDetails;
