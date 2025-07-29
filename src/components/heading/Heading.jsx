import Rectangle from "../rectangle"
function Heading({Product, Category}) {
  return (
    <>
    <section className="Heading-section  p-5">
            <div className="Heading w-full text-center text-2xl md:text-4xl text-secondary inline-flex gap-3 items-center justify-center">
              <Rectangle />
              <h1>{Category} {Product}</h1>
              <Rectangle />
            </div>
    </section>
    </>
  )
}

export default Heading