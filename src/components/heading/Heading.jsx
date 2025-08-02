import Rectangle from "../rectangle"
function Heading({Product, Category,CustomerLove}) {
  return (
    <>
    <section className="Heading-section p-5">
            <div className="Heading w-full text-center text-2xl md:text-4xl text-secondary inline-flex gap-6 items-center justify-center">
                {/* <span className="absolute w-24 h-24 bg-secondary rounded-full opacity-15 -top-6 left-2/4 animate-[float_4s_ease-in-out_infinite_0s]"></span> */}
        {/*<span className="absolute w-32 h-32 bg-blue-400 rounded-full opacity-15 -bottom-8 right-1/3 animate-[float_4s_ease-in-out_infinite_2s]"></span>
        <span className="absolute w-20 h-20 bg-teal-400 rounded-full opacity-15 top-1/3 -right-8 animate-[float_4s_ease-in-out_infinite_1s]"></span> */}
              
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