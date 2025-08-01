import Heading from "../../../components/heading/Heading.jsx";
import CategorySlider from "./CategorySlider.jsx";
const Category = () => {
  return (
    <>
      <Heading Category={"Our Category"} />
      <section className="category-section w-full max-w-7xl mx-auto px-2 !p-8 sm:px-4 py-0 mt-0 mb-10">       
        <CategorySlider />
      </section>
    </>
  );
};
export default Category;