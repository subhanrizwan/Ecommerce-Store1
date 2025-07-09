import Herosection from "../Sections/HomeSection/Herosection";
// import { useAppContext } from "../Context/context";
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import Featured from "../Sections/HomeSection/NewArrival/Featured.jsx";
const Home = () => {
  // const { name, HomeHeroSection } = useAppContext();
  return (
    <>
    <Herosection />
    <Category2 />
    <Featured />
    </>
  )
};

export default Home;
