// import Slder2 from "../CategorySection/Slider2.jsx";
// import Rectangle from "../../../components/rectangle.jsx";
import SelectAction from "./FeatureHighlightCards.jsx";
const FeatureHighlight = () => {
  return (
    <>
      <section className="featureHighlight-section flex justify-center lg:p-5 mt-6 lg:mt-0 md:mt-0">
        <div className="container flex">
          <div className="row p-8 max-w-4xl w-full mx-auto md:mt-5 lg:mt-0 md:mb-0">
            <SelectAction/>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeatureHighlight;
