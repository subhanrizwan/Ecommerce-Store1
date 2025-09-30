import Herosection from "../Sections/HomeSection/HomeSlider/Herosection.jsx";
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import FeatureProducts from "../Sections/HomeSection/FeatureProduct/FeatureProducts.jsx";
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";
import CustomerLove from "../Sections/HomeSection/Customerloveus/custloveus.jsx";
import ProductGrid from "../Sections/HomeSection/Toptrending/index.jsx";
import Products from "./product.jsx";
const Home = () => {
  return (
    <>
      <Herosection />
      <Category2 />
      <FeatureProducts />
      <CustomerLove />\
      <Products />
      {/* <ProductGrid /> */}
      <FeatureHighlight />
    </>
  );
};

export default Home;
