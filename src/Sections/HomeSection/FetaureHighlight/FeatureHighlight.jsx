import SelectAction from "./FeatureHighlightCards.jsx";
const FeatureHighlight = () => {
  return (
    <>
    <section className="py-10">
        <div className="container mx-auto lg:flex lg:justify-center">
          <div className="p-8 py-0 max-w-7xl">            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <SelectAction />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeatureHighlight;
