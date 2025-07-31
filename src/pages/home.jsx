import Herosection from "../Sections/HomeSection/HomeSlider/Herosection.jsx";
import Products from "../Sections/HomeSection/Products/Products.jsx"; 
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";

const Home = () => {
  return (
    <>
    <Herosection />
    <Category2 />
    {/* <CategorySlider /> */}
    <Products />
    <FeatureHighlight />
    {/* <Category /> */}
    </>
  )
};

export default Home;
