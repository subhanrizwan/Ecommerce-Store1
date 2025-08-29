import Img from '../../../../assets/images/home hero/36-540x550-1.png'
import Heading from '../../../components/heading/Heading';
export default function ProductGrid() {
  return (
    <>
        <Heading ProductGrids={'Best Products'} />
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 mb-8 lg:flex-row md:p-8 bg-gray-50">
      {/* Left - Large Product Card */}
      <div className="relative flex flex-col items-center justify-center bg-white p-6 md:p-10 rounded-lg shadow-sm w-full lg:w-3/5 h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="relative flex items-center justify-center w-full h-auto max-w-md">
          <img
            src={Img}
            alt="Xpeed Projector"
            width={400}
            height={250}
            className="object-contain"
          />
        </div>
        <div className="absolute flex flex-col items-center justify-center w-16 h-16 text-xs font-bold text-white bg-green-600 rounded-full bottom-6 left-6">
          <span>4%</span>
          <span>Offer</span>
        </div>
      </div>

      {/* Right - Grid of Small Product Cards */}
      <div className="grid w-full h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-2/5">
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