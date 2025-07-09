import BrowseByCategory from "./CategorySlider"
const Category=()=> {
  return (
    <>
         <section className="category-section lg:p-5 mt-16 flex justify-center">
                <div className="container ">
                    <div className="row  flex lg:justify-center md:justify-center justify-center p-5 flex-col sm:w-full md:w-full  md:mt-5 lg:mt-0 md:mb-5">
                     <div className="title text-2xl mb-5 sm:mb-7">
                        Browse by category
                    </div>
                        <BrowseByCategory />
                    </div>
                </div>
              </section>
    </>
  )
}
export default Category