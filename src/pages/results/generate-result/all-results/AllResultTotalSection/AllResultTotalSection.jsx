import React from "react";
import Image from "next/image";
import images from "../../../../../assets";

const AllResultTotalSection = () => {
  return (
    <div className='w-full mx-auto flex justify-between items-center'>
      <div className='w-72 relative overflow-hidden flex justify-start items-start gap-5 p-3 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <div className='flex flex-col justify-center items-center gap-y-3 w-full py-3'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>500</h4>
          <p className='text-xl font-semibold'>Total Student</p>
        </div>
      </div>

      <div className='w-72 relative overflow-hidden flex justify-start items-start gap-5 p-3 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <div className='flex flex-col justify-center items-center gap-y-3 w-full py-3'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>255</h4>
          <p className='text-xl font-semibold'>Student Passed</p>
        </div>
      </div>

      <div className='w-72 relative overflow-hidden flex justify-start items-start gap-5 p-3 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <div className='flex flex-col justify-center items-center gap-y-3 w-full py-3'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>200</h4>
          <p className='text-xl font-semibold'>Student Failed</p>
        </div>
      </div>
    </div>
  );
};

export default AllResultTotalSection;
