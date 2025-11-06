import Heading from "../../../components/heading/Heading.jsx";
import CategorySlider from "./CategorySlider.jsx";
import { Icon } from "@mui/material";
const Category = () => {
  return (
    <>
      <Heading Category={"Our Category"} />
      <section className="py-10 category-section">
        <div className="container mx-auto lg:flex lg:justify-center">
          <div className="max-w-7xl h-[90vh] md:h-[100vh]">
            {/* <section className="category-section w-full max-w-7xl mx-auto px-2 !p-6 sm:px-4 py-0 mt-0 mb-0">        */}
            <CategorySlider />
          </div>
        </div>
      </section>
      <Icon fontSize="large" />
    </>
  );
};
export default Category;