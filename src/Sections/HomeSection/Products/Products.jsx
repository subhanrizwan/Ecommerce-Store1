import Heading from "../../../components/heading/Heading.jsx";
import BasicCard from "./ProductCard.jsx";
const Products = () => {
  return (
    <>
    <Heading Product={'Our Products'} />
      <section className="category-section p-8 lg:p-5  flex justify-center ">
            <BasicCard />
      </section>
    </>
  );
};
export default Products;
