import Herosection from '../Sections/HomeSection/HomeSlider/Herosection.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";
import CustomerLove from "../Sections/HomeSection/Customerloveus/custloveus.jsx";
function About() {
  return (
    <>
    <div className="p-5 pb-0">
           <Breadcrumbs AboutPage = "About" />
    </div>
     <Herosection />
    <CustomerLove />
    <FeatureHighlight />
    </>
  )
}

export default About;