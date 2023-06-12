import React from "react";
import images from "../../../../../assets";
import Image from "next/image";

const AdmissionAdmitCard = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className='w-full mx-auto pt-5 pb-1 px-20 text-primary-text bg-white relative'>
        <div className='absolute lg:top-[30%] lg:left-[285px] xl:left-[350px]'>
          <Image src={images.bigLogo} height={450} width={450} />
        </div>
        <div className='text-center space-y-2'>
          <Image src={images.sclLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <p className='text-sm text-primary-text'>68, East Rampura, Dhaka</p>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Admit Card -2022
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
        </div>
        <div className='w-full px-5 mx-auto my-14'>
          <div className='flex justify-between capitalize'>
            <div className='font-corsiva flex justify-between items-center capitalize '>
              <div className='space-y-5 font-semibold text-base'>
                <p>name</p>
                <p>father's name</p>
                <p>mother's name</p>
              </div>
              <div className='mx-10 space-y-5'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='space-y-5 font-bangal font-bold text-md'>
                <p>Mahmudul Haque</p>
                <p>Anamul Haque</p>
                <p>Hosneara Pervin</p>
              </div>
            </div>
            <div className='flex justify-between capitalize'>
              <div className='font-semibold text-base space-y-5'>
                <p>class</p>
                <p>roll</p>
                <p>section/group</p>
              </div>
              <div className='mx-10 space-y-5'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='space-y-5 font-bangal font-bold text-md'>
                <p>Nine</p>
                <p>12</p>
                <p>A</p>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-between items-center mt-40'>
              <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
                <span className='bg-gray-800 py-[0.5px] w-64'></span>
                Controller of Examination
              </h3>
              <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
                <span className='bg-gray-800 py-[0.5px] w-64'></span>
                Principle Signature
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-end items-end gap-3 mx-auto my-16'>
        <button className='bg-yellow text-white py-3 w-36 rounded'>
          Print
        </button>
        <button className='bg-primary text-white py-3 w-36 rounded'>
          Download
        </button>
      </div>
    </div>
  );
};

export default AdmissionAdmitCard;
