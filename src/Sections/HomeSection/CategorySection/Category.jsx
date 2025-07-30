import Slder2 from "./Slider2.jsx";
import Heading from "../../../components/heading/Heading.jsx";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";

const categories = [
  { icon: HeadphonesOutlinedIcon, title: "Headphone" },
  { icon: PhoneAndroidOutlinedIcon, title: "Phone" },
  { icon: DesktopMacOutlinedIcon, title: "Desktop" },
  { icon: SportsEsportsOutlinedIcon, title: "Gaming" },
  { icon: WatchOutlinedIcon, title: "Watch" },
  { icon: CameraAltOutlinedIcon, title: "Camera" },
];

const Category = () => {
  return (
    <>
      <Heading Category={"Our Category"} />
      <section className="category-section w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 py-4 flex justify-center mt-8 mb-10">
        <div className="w-4/5 flex justify-center gap-4 flex-wrap md:flex-nowrap">
          {/* grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8  */}
          {categories.map((cat, idx) => (
            <Slder2 key={idx} icon={cat.icon} title={cat.title} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Category;