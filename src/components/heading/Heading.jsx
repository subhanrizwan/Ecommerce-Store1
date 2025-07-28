import Rectangle from "../rectangle"
function Heading() {
  return (
    <>
       <div className="flex lg:justify-center md:justify-center p-8 flex-col sm:w-full md:w-full md:mt-0 lg:mt-0 md:mb-5">
          <div className="subtitle text-xs md:text-sm text-secondary mb-3 sm:mb-7 inline-flex gap-3 items-center">
            <Rectangle />Browse by category
          </div>
          <div className="title text-2xl mb-7 ">Browse By Category</div>     
        </div>
    </>
  )
}

export default Heading