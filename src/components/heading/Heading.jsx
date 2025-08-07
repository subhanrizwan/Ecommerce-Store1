import Rectangle from "../rectangle"
function Heading({Product, Category,CustomerLove}) {
  return (
    <>
    <section className="Heading-section p-5">
            <div className="Heading w-full text-center text-2xl md:text-4xl text-secondary inline-flex gap-6 items-center justify-center">
               
              <Rectangle />
              <h1 className="text-4xl pb-4 md:text-6xl font-extrabold text-center
                   bg-gradient-to-r from-[#03ADA4] via-[#40B3D6] to-white
                   text-transparent bg-clip-text
                   bg-[length:200%_auto] animate-shimmer">{Category} {Product}{CustomerLove}</h1>
              <Rectangle />
            </div>
              </section>
    </>
  )
}

export default Heading