import React from "react";
import Image from "next/image";
import images from "../../../../assets";

const TotalSection = () => {
  return (
    <div className='w-full mx-auto gap-16 flex justify-between items-center'>
      <div className='w-1/3 relative overflow-hidden flex justify-start items-start gap-5 p-3 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <span className='w-16 h-16 rounded-full bg-[#BCF1ED99] flex justify-center items-center'>
          <Image src={images.studentPng} width={45} height={45} />
        </span>
        <div className='flex flex-col justify-start items-start gap-y-1'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>3500+</h4>
          <p className='text-xl font-semibold'>Applied</p>
          <div className='flex justify-between items-center gap-4'>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#1EB3A6]'>2000+</p>
              <p className='font-[500]'>Boys</p>
            </span>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#FF9900]'>1500+</p>
              <p className='font-[500]'>Girls</p>
            </span>
          </div>
        </div>
      </div>

      <div className='w-1/3 relative overflow-hidden flex justify-start items-start gap-5 p-3 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <span className='w-16 h-16 rounded-full bg-[#BCF1ED99] flex justify-center items-center'>
          <Image src={images.moneyPng} width={45} height={45} />
        </span>
        <div className='flex flex-col justify-start items-start gap-y-1'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>৳ 1,5550+</h4>
          <p className='text-xl font-semibold'>Paid</p>
          <div className='flex justify-between items-center gap-4'>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#1EB3A6]'>300+</p>
              <p className='font-[500]'>Boys</p>
            </span>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#FF9900]'>200+</p>
              <p className='font-[500]'>Girls</p>
            </span>
          </div>
        </div>
      </div>

      <div className='w-1/3 relative overflow-hidden flex justify-start items-start gap-5 p-3 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <span className='w-16 h-16 rounded-full bg-[#BCF1ED99] flex justify-center items-center'>
          <Image src={images.moneyPng} width={45} height={45} />
        </span>
        <div className='flex flex-col justify-start items-start gap-y-1'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>৳ 20,1570+</h4>
          <p className='text-xl font-semibold'>Unpaid</p>
          <div className='flex justify-between items-center gap-4'>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#1EB3A6]'>200+</p>
              <p className='font-[500]'>Boys</p>
            </span>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#FF9900]'>300+</p>
              <p className='font-[500]'>Girls</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
