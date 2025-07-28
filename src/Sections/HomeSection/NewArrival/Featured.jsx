import Rectangle from "../../../components/rectangle";
import ImageList from "./imagegrid.jsx";
import Heading from "../../../components/heading/Heading.jsx";
const Featured = () => {
  return (
    <section className="featured-section p-8 lg:p-5 mt-8 lg:mt-0 md:mt-0 sm:mt-0 flex justify-center">
      <div className="container">
       <Heading />
         
          <ImageList />
      </div>
    </section>
  );
};

export default Featured;
