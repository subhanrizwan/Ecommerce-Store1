import { Tooltip } from "@mui/material";

export default function CategoryCards({ icon: Icon, title }) {
  return (
    <>
      <div className="text-center text-[18px] text-black border border-gray-300 rounded-full bg-transparent h-[160px] w-[160px] flex justify-center items-center transition duration-300 cursor-pointer flex-col text-sm gap-y-5">
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
          <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-12 rounded-full">
          <Icon fontSize="large" />
          </div>
        </Tooltip>
      </div>

      
    </>
  );
}
