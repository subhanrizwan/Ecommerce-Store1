import Heading from "../../../components/heading/Heading.jsx";
import ProductSlider from "./ProductSlider.jsx";
const Products = () => {
  return (
    <>
    <Heading Product={'Our Products'} />
      <section className="category-section px-2 sm:px-4 md:px-8 p-8 mt-0 mb-10 ">
            {/* <BasicCard /> */}
            <ProductSlider />
      </section>
    </>
  );
};
export default Products;
