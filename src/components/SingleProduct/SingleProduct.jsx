import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/context";
import FormatePrice from "../../Helpers/FormatePrice";
import BreadcrumbComponent from "../Breadcrumbs";

const url = "https://api.pujakaitem.com/api/products";

function SingleProduct() {

  const { id } = useParams();
  const { GetSingleProduct, isSingleLoading, singleProduct } = useContext(AppContext);

  useEffect(() => {
    GetSingleProduct(`${url}/${id}`);
    console.log(singleProduct.image);
  }, [id]);

  if (isSingleLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="py-5">
        {" "}
        <BreadcrumbComponent ContactPage={singleProduct.name} />
      </div>
      <section className="py-10 SingleProduct-page">
        <div className="container mx-auto ">
          <div className="md:flex md:justify-between lg:justify-center   p-8 py-0 gap-x-5 max-w-7xl">
            <div className="product-images md:w-[60%]">
              <div className="flex gap-x-4">
                <div class="flex-1 md:w-[40%] mb-5">
                  <div className="flex flex-col gap-4">
                    <div className="w-full h-auto bg-slate-400">
                      {singleProduct?.image?.slice(0,1).map((imgObj, ind) => (
                          <img
                            className="w-full h-full object-cover"
                            src={imgObj?.url}
                            alt={`product-${ind}`}
                          />
                      ))}
                    </div>
                    <div className="flex gap-2 justify-between flex-wrap">
                      {singleProduct?.image?.slice(1,4).map((imgObj, ind) => (
                        <div key={ind} className="w-56 h-40 bg-slate-400">
                          <img
                            className="w-full h-full object-cover"
                            src={imgObj?.url}
                            alt={`product-${ind}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-details md:w-[40%]">
              <div className="header flex justify-between items-center   mb-5">
                <h1 className="mb-0 text-4xl">{singleProduct.name}</h1>
                <h1 className="mb-0">{singleProduct.category}</h1>
              </div>
              <h1 className="mb-5">{singleProduct.company}</h1>
              <FormatePrice price={singleProduct.price} />
              <div className="colors mt-5">
                {/* <div className="flex gap-3">
                  {singleProduct.colors.map((currentColor, index) => {
                    return (
                      <button
                        key={index}
                        className="w-8 h-8 rounded-full"
                        style={{
                          backgroundColor: currentColor,
                        }}
                      ></button>
                    )
                  })}
                </div> */}
              </div>
              <p className="mb-5 mt-5" >{singleProduct.description}</p>
              <div className="mt-5">
                <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-black transition-all duration-500">
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
