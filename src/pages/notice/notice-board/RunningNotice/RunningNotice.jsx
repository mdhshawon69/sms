import React from "react";
import { useQuery } from "react-query";
import { Edit, Delete } from "../../../../constants/icons";
import { Axios } from "../../../../core/axios";

const RunningNotice = ({ setShowModal }) => {
  const getData = () => {
    return Axios.get("/admin/notice");
  };
  const { data } = useQuery("notice-list", getData);

  return (
    <div className='w-full flex justify-center items-center z-30'>
      <div className='w-[10%] bg-yellow py-[17px] text-center font-semibold text-white ring-1 ring-white'>
        <p className='font-sans'>Latest News</p>
      </div>
      <div className='w-11/12 py-4 text-center bg-[#1EB3A6]/50 flex justify-between items-center font-bangla'>
        <marquee>
          <div className='flex gap-5 items-center text-black'>
            {data?.data?.data?.map((item, i) => (
              <p className='flex items-center gap-2' key={i}>
                {item.title}
              </p>
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default RunningNotice;
