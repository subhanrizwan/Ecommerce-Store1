import Herosection from "../Sections/HomeSection/HomeSlider/Herosection.jsx";
import Products from "../Sections/HomeSection/Products/Products.jsx"; 
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";
import SearchModal from "../components/SearchProducts/search.jsx";
const Home = () => {
  return (
    <>
    <Herosection />
    <Category2 />
    <Products />
    <FeatureHighlight />
    <SearchModal />
    </>
  )
};

export default Home;
