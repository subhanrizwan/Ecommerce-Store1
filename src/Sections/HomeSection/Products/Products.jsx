import Heading from "../../../components/heading/Heading.jsx";
import ProductSlider from "./ProductSlider.jsx";
const Products = () => {
  return (
    <>
    <Heading Product={'Our Products'} />
      <section className="category-section sm:px-4 md:px-12 p-6 mt-0 mb-10 ">
            <ProductSlider />
      </section>
    </>
  );
};
export default Products;
