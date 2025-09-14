import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/context";
import FormatePrice from "../../Helpers/FormatePrice";
import BreadcrumbComponent from "../Breadcrumbs";
const url = "https://api.pujakaitem.com/api/products";
function SingleProduct() {
  const { id } = useParams();
  const { GetSingleProduct, isSingleLoading, singleProduct } =
    useContext(AppContext);

  useEffect(() => {
    GetSingleProduct(`${url}/${id}`);
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
          <div className="flex justify-between p-8 py-0 max-w-7xl">
            <div className="products-images">
              <div className="flex gap-x-4">
                {/* <!-- Left thumbnails --> */}
                <div className="flex flex-col w-24 gap-2">
                  {/* <!-- small images --> */}
                  <div className="w-24 h-28 smallimg1 bg-slate-300">
                  </div>
                  <div className="w-24 h-28 smallimg1 bg-slate-300">
                  </div>
                  <div className="w-24 h-28 smallimg1 bg-slate-300">
                  </div>
                </div>
                {/* <!-- Right main image --> */}
                <div class="flex-1 ">
                  <div className="w-[50rem] h-96 smallimg1 bg-slate-400">
                  </div>
                </div>
              </div>
            </div>
            <div className="products-details flex">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
