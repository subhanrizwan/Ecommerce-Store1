import Heading from "../../../components/heading/Heading.jsx";
import CategorySlider from "./CategorySlider.jsx";
const Category = () => {
  return (
    <>
      <Heading Category={"Our Category"} />
      <section className="category-section w-full max-w-7xl mx-auto px-2 sm:px-4 py-0 mt-0 mb-10">
        {/* <div className="w-full flex gap-4 bg-gray-500 flex-wrap md:flex-nowrap"> */}
          {/* {categories.map((cat, idx) => (
            <CategoryCards key={idx} icon={cat.icon} title={cat.title} />
          ))} */}
        {/* </div> */}
        <CategorySlider />
      </section>
    </>
  );
};
export default Category;