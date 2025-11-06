import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/context";
import FormatePrice from "../../Helpers/FormatePrice";
import BreadcrumbComponent from "../Breadcrumbs";
import ImageGallery from "../ImageGallery/ImageGallery";

const url = "https://api.pujakaitem.com/api/products";

function SingleProduct() {

  const { id } = useParams();
  const { GetSingleProduct, isSingleLoading, singleProduct } = useContext(AppContext);

  // const [mainImage, setMainImage] = useState(
  //   singleProduct?.image?.[0]?.url || ""
  // );
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
          <div className="p-5 md:flex md:justify-between lg:justify-center gap-x-6 max-w-7xl">
            <div className="product-images md:w-[60%] mb-5">
              <div className="flex gap-x-4 ">
                <div class="flex-1 md:w-[40%] mb-5">
                  <div className="flex flex-col gap-4">
                    {/* <div className="w-full h-auto bg-slate-400">
                      {singleProduct?.image?.slice(0,1).map((imgObj, ind) => (
                          <img
                            className="object-cover w-full h-full"
                            src={imgObj?.url}
                            alt={`product-${ind}`}
                          />
                      ))}
                    </div> */}
                    {/* <div className="flex flex-wrap justify-between gap-2">
                      {singleProduct?.image?.slice(1,4).map((imgObj, ind) => (
                        <div key={ind} className="w-56 h-40 bg-slate-400">
                          <img
                            className="object-cover w-full h-full"
                            src={imgObj?.url}
                            alt={`product-${ind}`}
                          />
                        </div>
                      ))}
                    </div> */}
                    {/* Swiper Slider */}
                    <ImageGallery Images={singleProduct.image} />
                  </div>
                  {/* <div className="flex flex-col gap-2">
                    <div className="w-full h-96 bg-slate-400">
                      {mainImage && (
                        <img
                          className="object-cover w-full h-full"
                          src={mainImage}
                          alt="main-product"
                        />
                      )}
                    </div>

                    <div className="flex flex-wrap justify-between gap-3">
                      {singleProduct?.image?.map((imgObj, ind) => (
                        <div
                          key={ind}
                          className="w-[48%] md:w-40 h-40 bg-slate-400 cursor-pointer"
                          onClick={() => setMainImage(imgObj?.url)}
                        >
                          <img
                            className="object-cover w-full h-full"
                            src={imgObj?.url}
                            alt={`thumbnail-${ind}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="products-details md:w-[40%]">
              <div className="flex items-center justify-between mb-0 header">
                <h1 className="mb-0 text-[2.125rem] capitalize ">{singleProduct.name}</h1>
                <p className="py-6 capitalize" >{singleProduct.company}</p>
              </div>
              <p className="py-6" >{singleProduct.description}</p>
              <div className="price text-[1.125rem]">
                <span className="font-semibold ">Price :</span> {" "}
                <FormatePrice price={singleProduct.price} />
              </div>
              {/* Color */}
              <div className="mt-5 colors">
                
              </div>
              <div className="mt-5">
                <button className="px-6 py-2 text-white transition-all duration-500 rounded bg-secondary hover:bg-black">
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
