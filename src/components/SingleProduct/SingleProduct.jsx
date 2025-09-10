import { useParams } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../Context/context";
// import { useEffect } from "react";

function SingleProduct() {
  const Api = "https://api.pujakaitem.com/api/products";

  const { id } = useParams();
  const { GetSingleProduct, isSingleLoading } = useContext(AppContext);

  // useEffect(() => {
  //   GetSingleProduct(`${Api}?id=${id}`);
  // }, [id, GetSingleProduct]);

  if (isSingleLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="text-5xl text-center">
        <h1>Single Product {JSON.stringify(id)}</h1>
      </div>
    </>
  );
}

export default SingleProduct;
