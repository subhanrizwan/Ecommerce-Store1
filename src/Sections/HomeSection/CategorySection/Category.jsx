import Slder2 from "./Slider2.jsx";
import Rectangle from "../../../components/rectangle.jsx";

const Category = () => {
  return (
    <>
      <section className="category-section lg:p-5 mt-10 lg:mt-0 md:mt-0 flex justify-center ">
        <div className="container ">
          <div className="row flex lg:justify-center md:justify-center justify-center p-8 flex-col sm:w-full md:w-full md:mt-5 lg:mt-0 md:mb-0">
            <div className="subtitle text-xs md:text-sm text-secondary mb-3 sm:mb-7 inline-flex gap-3 items-center">
              <Rectangle />Browse by category
            </div>
            <div className="title text-2xl mb-7">Browse By Category</div>
            <Slder2 />
          </div>
        </div>
      </section>
    </>
  );
};
export default Category;
