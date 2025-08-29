import Herosection from '../Sections/HomeSection/HomeSlider/Herosection.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";
import CustomerLove from "../Sections/HomeSection/Customerloveus/custloveus.jsx";
import OurTeam from '../Sections/AboutSections/OurTeam/ourteam.jsx';
function About() {
  return (
    <>
    {/* <div className="py-5 pb-0">
           <Breadcrumbs AboutPage = "About" />
    </div> */}
     <Herosection />
    <CustomerLove />
    <OurTeam />
    <FeatureHighlight />
    </>
  )
}

export default About;