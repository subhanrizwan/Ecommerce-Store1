import Herosection from "../Sections/HomeSection/HomeSlider/Herosection.jsx";
import Products from "../Sections/HomeSection/Products/Products.jsx"; 
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";
import ProductSlider from "../Sections/HomeSection/Products/ProductSlider.jsx";
const Home = () => {
  return (
    <>
    <Herosection />
    <Category2 />
    <Products />
    <FeatureHighlight />
    </>
  )
};

export default Home;
