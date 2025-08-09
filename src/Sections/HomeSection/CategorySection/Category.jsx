import Heading from "../../../components/heading/Heading.jsx";
import CategorySlider from "./CategorySlider.jsx";
import { Icon } from "@mui/material";
const Category = () => {
  return (
    <>
      <Heading Category={"Our Category"} />
      <section className="category-section w-full max-w-7xl mx-auto px-2 !p-6 sm:px-4 py-0 mt-0 mb-0">       
        <CategorySlider />
      </section>
      <Icon fontSize="large" />
    </>
  );
};
export default Category;