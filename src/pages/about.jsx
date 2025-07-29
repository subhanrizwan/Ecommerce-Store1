import Herosection from '../Sections/HomeSection/HomeSlider/Herosection.jsx';
import FeatureHighlight from '../Sections/HomeSection/FetaureHighlight/FeatureHighlight';
import Breadcrumbs from '../components/Breadcrumbs.jsx'
function About() {
  return (
    <>
    <div className="p-5 pb-0">
           <Breadcrumbs AboutPage = "About" />
    </div>
     <Herosection />
     <FeatureHighlight />
    </>
  )
}

export default About;