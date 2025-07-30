import Herosection from "../Sections/HomeSection/HomeSlider/Herosection.jsx";
import Products from "../Sections/HomeSection/Products/Products.jsx"; 
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";
import CartDrawer from "../components/CartDrawer/drawer.jsx";
// import Featured from "../Sections/HomeSection/NewArrival/Featured.jsx";
const Home = () => {
  // const { name, HomeHeroSection } = useAppContext();
  return (
    <>
    <Herosection />
    <Category2 />
    <Products />
    <FeatureHighlight />
    <CartDrawer />
    </>
  )
};

export default Home;
