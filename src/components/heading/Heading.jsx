import Rectangle from "../rectangle"
function Heading({Product, Category,CustomerLove,ProductGrids,Contact,OurTeam,Signup,Login,FeatureProduct}) {
  return (
    <>
    <section className="p-5 Heading-section">
            <div className="inline-flex items-center justify-center w-full gap-6 text-2xl text-center Heading md:text-4xl text-secondary">
               
              <Rectangle />
              <h1 className="text-3xl pb-4 md:text-6xl font-extrabold text-center
                   bg-secondary  text-transparent bg-clip-text
                   bg-[length:200%_auto] animate-an">{FeatureProduct}{Category}{OurTeam}{Login}{Product}{Signup}{CustomerLove}{ProductGrids}{Contact}</h1>
              <Rectangle />
            </div>
              </section>
    </>
  )
}

export default Heading