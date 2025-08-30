import Heading from "../../../components/heading/Heading";
import StarIcon from "@mui/icons-material/Star";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CountUp from "react-countup";

const stats = [
  {
    title: <CountUp end={100} duration={3} separator="," suffix="K" />,
    description: "Orders Delivered",
    icon: <InventoryOutlinedIcon />,
  },
  {
    title: <CountUp start={0} end={4.9} decimals={1} />,
    description: "Average Customer Rating",
    icon: <StarIcon />,
  },
  {
    title: <CountUp end={10} duration={3} separator="," suffix="K" />,
    description: "Happy Customers",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    title: <CountUp start={0} end={99} duration={3} separator="," />,
    description: "On-Time Delivery",
    icon: <LocalShippingOutlinedIcon />,
  },
];

export default function CustomerLove() {
  return (
    <>
      {/* Our Impact Section */}
      <Heading CustomerLove={"Why Customer Love Us"} />
      <section className="py-10">
        <div className="container mx-auto lg:flex lg:justify-center">
          <div className="p-8 py-0 max-w-7xl">
            {/* Statistics Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Countries Represented */}
              {stats.map((stat, ind) => {
                return (
                  <div
                    key={ind}
                    className="p-12 bg-white border border-gray-100 shadow-sm rounded-2xl shadow-slate-300"
                  >
                    <div className="mb-3 text-5xl font-bold text-secondary">
                      {stat.title}
                    </div>
                    <div className="mb-6 font-medium text-gray-700">
                      {stat.description}
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardbg text-secondary">
                      {stat.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
