// import CategoryList from './CategoryList'
import Slider from './HomeSlider/Slider'
const Herosection = () => {
  return (
    <>
      <section className="hero-section lg:p-5">
        <div className="container mx-auto flex lg:justify-center ">
          <div className="row w-full sm:w-full md:w-full lg:w-4/5 flex md:mt-5 lg:mt-0 md:mb-5">
          <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;