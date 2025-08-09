import { Tooltip } from "@mui/material";

export default function CategoryCards({ icon: Icon, title }) {
  return (
    <>
    <div className="">
      <div className="group text-center text-[18px] flex justify-center items-center text-black border border-gray-300 rounded-full h-[200px] w-[200px] transition duration-300 cursor-pointer flex-col text-sm">
        <Tooltip
          title={title}
          placement="bottom"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#03ada4",
                color: "#fff",
                fontSize: "0.7rem",
                fontWeight: 600,
                boxShadow: 3,
                borderRadius: 1,
                px: 2,
                py: 1,
              },
            },
            arrow: {
              sx: {
                color: "#03ada4",
              },
            },
          }}
        >
          <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-cardbg p-16 rounded-full">
           <div className="group-hover:text-secondary transition-all duration-200">
          <Icon fontSize="large" />
           </div>
          
          </div>
        </Tooltip>
      </div>
       <div className="flex justify-center p-6 text-black">
        <p>{title}</p>
         </div>
        
    </div>
    </>
  );
}
