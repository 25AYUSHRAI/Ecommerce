import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const Products = () => {
  const products = useSelector((state)=>state.productReducer.products);
 const renderproduct = products.map((product)=>{
  return (
      <div key={product.id} className="w-[23%] mr-3 mb-3 border shadow" >
        <img className="w-full h-[30vh]  " src={product.image} alt="" />
        <h1>{product.title}</h1>
        <small>{product.description?.slice(0, 100)}...</small>
        <div className="mt-3 flex justify-between items-center p-3 ">
          <p>{product.price}</p>
          <button >Add to Cart</button>
        </div>
        <Link className="block m-auto w-1/2" to={`/product/${product.id}`}>More Info</Link>
      </div>
      
  )
 });
 return (
  products.length>0 ? <div className="w-full  overflow-auto flex flex-wrap">
    {renderproduct}
  </div> :"Loading...."
)
}

export default Products