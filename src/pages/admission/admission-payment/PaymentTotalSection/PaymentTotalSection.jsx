import React from "react";
import Image from "next/image";
import images from "../../../../assets";

const PaymentTotalSection = () => {
  return (
    <div className='w-full mx-auto flex justify-between items-center gap-16'>
      <div className='w-1/2  relative overflow-hidden flex justify-start items-start gap-5 px-3 py-6 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -left-3 -bottom-5'>
          <Image
            src={images.yellowCircle}
            alt='yellow_circle'
            width={45}
            height={45}
          />
        </span>
        <span className='w-16 h-16 rounded-full bg-[#BCF1ED99] flex justify-center items-center'>
          <Image src={images.moneyPng} width={45} height={45} />
        </span>
        <div className='flex flex-col justify-start items-start gap-y-1'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6] flex justify-center items-center gap-2'>
            ৳ 15,555{" "}
            <p className='text-sm font-bold text-primary-text'>Total</p>
          </h4>

          <div className='flex justify-between items-center gap-4'>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#1EB3A6]'>
                2000+ <span className='text-sm'>Students</span>
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className='w-1/2  relative overflow-hidden flex justify-start items-start gap-5 px-3 py-6 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -left-3 -bottom-5'>
          <Image
            src={images.yellowCircle}
            alt='yellow_circle'
            width={45}
            height={45}
          />
        </span>
        <span className='w-16 h-16 rounded-full bg-[#BCF1ED99] flex justify-center items-center'>
          <Image src={images.moneyPng} width={45} height={45} />
        </span>
        <div className='flex flex-col justify-start items-start gap-y-1'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6] flex justify-center items-center gap-2'>
            ৳ 10,000
            <p className='text-sm font-bold text-primary-text'>Paid</p>
          </h4>

          <div className='flex justify-between items-center gap-4'>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#1EB3A6]'>
                1000 <span className='text-sm'>Students</span>
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className='w-1/2  relative overflow-hidden flex justify-start items-start gap-5 px-3 py-6 bg-#fff shadow-md rounded-md ring-1 ring-[#0D153066]'>
        <span className='absolute -left-3 -bottom-5'>
          <Image
            src={images.yellowCircle}
            alt='yellow_circle'
            width={45}
            height={45}
          />
        </span>
        <span className='w-16 h-16 rounded-full bg-[#BCF1ED99] flex justify-center items-center'>
          <Image src={images.moneyPng} width={45} height={45} />
        </span>
        <div className='flex flex-col justify-start items-start gap-y-1'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6] flex justify-center items-center gap-2'>
            ৳ 5,555
            <p className='text-sm font-bold text-primary-text'>Unpaid</p>
          </h4>

          <div className='flex justify-between items-center gap-4'>
            <span className='flex justify-between items-center gap-2'>
              <p className='font-semibold text-[#1EB3A6]'>
                2500 <span className='text-sm'>Students</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTotalSection;
