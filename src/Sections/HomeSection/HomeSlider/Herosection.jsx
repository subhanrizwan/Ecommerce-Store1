import Slider from './Slider'
const Herosection = () => {
  return (
    <>
      <section className="py-0 hero-section">
        <div className="container mx-auto lg:flex lg:justify-center">
          <div className="max-w-7xl  h-[90vh] md:h-[100vh]">
          <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;