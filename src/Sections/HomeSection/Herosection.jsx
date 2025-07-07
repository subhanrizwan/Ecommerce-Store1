import CategoryList from './CategoryList'
import HeroSlider from './HomeSlider/HeroSlider'
const Herosection = ({ Home, About }) => {
  return (
    <>
      <section>
        <div className="container hero-section">
          <div className="flex justify-center w-screen h-[90vh] p-0">
            <div className="w-full sm:w-full md:w-full lg:w-10/12 flex justify-between h-auto p-5">
              <div className="left h-5/6 w-[23%] ">
                <div className="category-list">
                    <CategoryList />
                </div>
              </div>
              <div className="right h-4/5 w-3/4 ">
                {/* <div className="hero-content"> */}
                    <HeroSlider />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;