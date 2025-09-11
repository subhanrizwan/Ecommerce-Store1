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
      <div className="text-5xl text-center">
        <h1>Single Product {id}</h1>
        <h1>{singleProduct.name}</h1>
        <h1>{singleProduct.category}</h1>
        <h1>{singleProduct.featured}</h1>
        <h1>
          {" "}
          <FormatePrice price={singleProduct.price} />
        </h1>
        <h1>{singleProduct.reviews}</h1>
        <h1>{singleProduct.stars}</h1>
        <h2>{singleProduct.company}</h2>
        <h3>{singleProduct.stock}</h3>
      </div>
    </>
  );
}

export default SingleProduct;
