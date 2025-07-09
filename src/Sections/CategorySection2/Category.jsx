import Slder2 from "./Slider2" 
import Rectangle from "../../components/rectangle"
const Category=()=> {
  return (
    <>
         <section className="category-section lg:p-5 mt-16 flex justify-center">
                <div className="container ">
                    <div className="row  flex lg:justify-center md:justify-center justify-center p-5 flex-col sm:w-full md:w-full  md:mt-5 lg:mt-0 md:mb-5">
                     <div className="subtitle text-xs md:text-sm text-secondary mb-3 sm:mb-7 inline-flex gap-3 items-center">
                       <Rectangle /> Browse by category
                    </div>
                    <div className="title text-2xl mb-7">
                      Browse By Category
                    </div>
                        <Slder2 />
                    </div>
                </div>
              </section>
    </>
  )
}
export default Category