import Rectangle from "../../../components/rectangle";
import ImageList from "./imagegrid.jsx";
const Featured = () => {
  return (
    <section className="category-section lg:p-5 mt-8 lg:mt-0 md:mt-0 sm:mt-0 flex justify-center">
      <div className="container">
        <div className="row flex lg:justify-center md:justify-center justify-center p-8 flex-col sm:w-full md:w-full  md:mt-5 lg:mt-0 md:mb-5">
          <div className="subtitle text-xs md:text-sm text-secondary mb-3 sm:mb-7 inline-flex gap-3 items-center">
            <Rectangle /> Featured
          </div>
          <div className="title text-2xl mb-7">New Arrival</div>
          <div className="w-full flex justify-center">
          <ImageList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
