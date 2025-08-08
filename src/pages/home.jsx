import Herosection from "../Sections/HomeSection/HomeSlider/Herosection.jsx";
import Products from "../Sections/HomeSection/Products/Products.jsx"; 
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";
import ScrollingBanner from "../Sections/HomeSection/ScrollingItems/BannnerScrolling.jsx";
import CustomerLove from "../Sections/HomeSection/Customerloveus/custloveus.jsx";
import ProductGrid from "../Sections/HomeSection/Toptrending/index.jsx";
const Home = () => {
  return (
    <>
    <Herosection />
    <Category2 />
    <Products />
    <ProductGrid />
    <CustomerLove />
    <FeatureHighlight />
    {/* <ScrollingBanner /> */}
    </>
  )
};

export default Home;
