// import CategoryList from './CategoryList'
import Slider from './Slider'
const Herosection = () => {
  return (
    <>
      <section className="hero-section mb-6">
        <div className="container mx-auto">
          {/* row w-full sm:w-full md:w-full lg:w-11/12 flex md:mt-5 lg:mt-0 md:mb-5 */}
          <div className="max-w-7xl">
          <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;