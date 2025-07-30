// import CategoryList from './CategoryList'
import Slider from './Slider'
const Herosection = () => {
  return (
    <>
      <section className="hero-section lg:p-0 lg:pt-3 mb-10">
        <div className="container mx-auto   flex lg:justify-center">
          <div className="row w-full sm:w-full md:w-full lg:w-11/12 flex md:mt-5 lg:mt-0 md:mb-5">
          <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;