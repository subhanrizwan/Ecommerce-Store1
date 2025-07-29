import Rectangle from "../../../components/rectangle";
import ImageList from "./imagegrid.jsx";
import Heading from "../../../components/heading/Heading.jsx";
const Featured = () => {
  return (
    <section className="featured-section lg:p-5 mt-10 lg:mt-0 md:mt-0 flex justify-center ">
      <div className="container">
       {/* <Heading /> */}
         <div className="row flex lg:justify-center md:justify-center justify-center p-0 flex-col sm:w-full md:w-full md:mt-5 lg:mt-0 md:mb-0">
            <div className="subtitle text-xs md:text-sm text-secondary mb-3 sm:mb-7 inline-flex gap-3 items-center">
              <Rectangle />Browse by category  <Rectangle />
            </div>
            <div className="title text-2xl mb-7">Browse By Category</div>
          {/* <ImageList /> */}
      </div>
      </div>
    </section>
  );
};

export default Featured;
