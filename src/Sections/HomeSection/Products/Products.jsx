import Heading from "../../../components/heading/Heading.jsx";
import ProductSlider from "./ProductSlider.jsx";
import Tabsproduct from "../Tabs/tabs.jsx";
const Products = () => {
  return (
    <>
    <Heading Product={'Our Products'} />
    <div className="flex justify-center">
    <Tabsproduct />
    </div>
      <section className="category-section sm:px-4 md:px-12 p-6 mt-0 mb-10 "> 
            <ProductSlider />
      </section>
    </>
  );
};
export default Products;
