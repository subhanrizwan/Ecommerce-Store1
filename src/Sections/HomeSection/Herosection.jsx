import CategoryList from './CategoryList'
import HeroSlider from './HomeSlider/HeroSlider'
const Herosection = ({ Home, About }) => {
  return (
    <>
      <section>
        <div className="container hero-section">
          <div className="flex justify-center w-screen h-[90vh] p-0">
            <div className="w-full sm:w-full md:w-screen lg:w-10/12 bg-gray-200 flex justify-between h-auto p-5">
              <div className="left h-5/6 w-[23%] md:w-[20%] sm:w-[35%]">
                <div className="category-list">
                    <CategoryList />
                </div>
              </div>
              <div className="right h-4/5 w-3/4 md:w-4/5">
                    <HeroSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;