import Img from '../../../../assets/images/home hero/36-540x550-1.png'
import Heading from '../../../components/heading/Heading';
export default function ProductGrid() {
  return (
    <>
        <Heading ProductGrids={'Best Products'} />
    <div className="flex flex-col lg:flex-row gap-4 p-8 mb-8 md:p-8 bg-gray-50 min-h-screen items-center justify-center">
      {/* Left - Large Product Card */}
      <div className="relative flex flex-col items-center justify-center bg-white p-5 md:p-10 rounded-lg shadow-sm w-full lg:w-3/5 h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="relative w-full max-w-md h-auto flex justify-center items-center">
          <img
            src={Img}
            alt="Xpeed Projector"
            width={400}
            height={250}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-6 left-6 bg-green-600 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-xs font-bold">
          <span>4%</span>
          <span>Offer</span>
        </div>
      </div>

      {/* Right - Grid of Small Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-2/5 h-full">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm h-[200px] md:h-[240px]">
            <img
              src={Img}
              alt={`Product ${i + 1}`}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      
    </div>
    </>
  );
}
