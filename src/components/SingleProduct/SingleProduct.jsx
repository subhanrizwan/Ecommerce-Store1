import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/context";
import FormatePrice from "../../Helpers/FormatePrice";
import BreadcrumbComponent from "../Breadcrumbs";
import ImageGallery from "../ImageGallery/ImageGallery";

const url = "https://fakestoreapi.com/products";
function SingleProduct() {
  const [count, setCount] = useState(1);

  const AddtoCart = (id, count) => {
    let saveCart = JSON.stringify({ id, count });
    localStorage.setItem("cart",saveCart)
    console.log(saveCart);
  }
  
  const CartInc = () => {
    setCount(count + 1);
  }
  
  const CartDec = () => {
    count >= 1 ? setCount(count - 1) : setCount(0);
  }

  const { id } = useParams();
  const { GetSingleProduct, isSingleLoading, singleProduct } = useContext(AppContext);

  useEffect(() => {
    try {
      GetSingleProduct(`${url}/${id}`);
    } catch (error) {
      console.log("Error fetching single product:", error);
    }
  }, [id]);

  if (isSingleLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="py-5">
        {" "}
        <BreadcrumbComponent ContactPage={singleProduct.id} />
      </div>
      <section className="py-0 SingleProduct-page">
        <div className="container mx-auto ">
          <div className="flex flex-col-reverse p-5 pt-0 pb-0 gap-y-5 md:flex-row md:flex md:gap-x-0 lg:gap-x-10 lg:justify-center max-w-7xl">
            <div className="product-images md:w-[60%] mb-0">
              <div className="flex flex-col justify-center gap-4">
                {/* Swiper Slider */}
                {singleProduct.image && (
                  <ImageGallery Images={[singleProduct.image]} />
                )}
              </div>
            </div>
            <div className="products-details md:w-[50%]">
              <div className="flex items-center justify-between gap-x-6 header">
                <h1 className="mb-0 text-[1.2rem] md:text-[1.3rem] capitalize w-[70%] ">{singleProduct.title}</h1>
                <p className="py-6 capitalize text-[0.9rem] w-[30%]" >{singleProduct.category}</p>
              </div>
              <p className="py-2 text-sm" >{singleProduct.description}</p>
              <div className="price text-[1.125rem] md:text-[1rem]">
                <span className="font-semibold ">Price :</span> {" "}
                <FormatePrice price={singleProduct.price} />
              </div>
              {/* add to cart */}
              <div className="mt-5">
                <div className="mb-3 count">
                  <button onClick={CartDec} className="text-[1.125rem] font-semibold">-</button>
                  <span className="px-3 text-[1.125rem] font-semibold">{count}</span>
                  <button onClick={CartInc} className="text-[1.125rem] font-semibold">+</button>
                </div>
                <button
                  onClick={() => AddtoCart(singleProduct.id, count)}
                  className="px-6 py-2 text-white transition-all duration-500 rounded bg-secondary hover:bg-black">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
