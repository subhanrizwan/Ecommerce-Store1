
import SelectAction from "./FeatureHighlightCards.jsx";
const FeatureHighlight = () => {
  return (
    <>
      <section className="featureHighlight-section py-6">
        <div className="container max-auto ">
          <div className="max-w-7xl flex gap-x-12 gap-y-4 justify-center lg:flex lg:justify-center flex-wrap">
            <SelectAction/>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeatureHighlight;
