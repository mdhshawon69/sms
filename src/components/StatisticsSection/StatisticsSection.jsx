import Image from "next/image";
import React from "react";
import { useState } from "react";
import images from "../../assets";
import { Edit } from "../../constants/icons";

// <---------------The parent component is index/Homepage.jsx + about-us.jsx/AboutUs---------------------->

const StatisticsSection = () => {
  const [heading, setHeading] = useState(false);
  const [paragraph, setParagraph] = useState(false);
  return (
    <div className='flex justify-between items-center bg-primary rounded-tr-[55px] xl:mb-32 rounded-br-[55px]'>
      <div className='w-1/2 space-y-6 pl-40 font-bangla'>
        <h4 className='text-white font-semibold text-xl'>
          প্রাতিষ্ঠানিক স্ট্যাটিস্টিক
        </h4>
        {heading ? (
          <input
            type='text'
            className='w-full bg-transparent border border-gray-300 h-[70px] text-4xl outline-none mb-5 text-white font-semibold'
          />
        ) : (
          <h2 className='text-white font-bold text-4xl flex justify-start items-center gap-3'>
            <span className='bg-white w-8 h-8 rounded-full shadow-md -ml-12 flex justify-center items-center cursor-pointer border border-gray-300'>
              <button onClick={() => setHeading(true)}>
                <Edit className='text-primary w-5 h-5' />
              </button>
            </span>
            পূর্ব রামপুরা স্কুল এন্ড কলেজ
          </h2>
        )}
        {paragraph ? (
          <textarea className='w-full bg-transparent border border-gray-300 h-40 text-md text-white outline-none'></textarea>
        ) : (
          <span className='flex gap-3 w-full'>
            <span className='bg-white w-8 h-8 rounded-full shadow-md -ml-9 flex justify-center items-center cursor-pointer border border-gray-300'>
              <button onClick={() => setParagraph(true)}>
                <Edit className='text-primary w-5 h-5' />
              </button>
            </span>
            <p className='text-white leading-10 w-full'>
              যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে
              ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি যদি
              নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে অন্যের শেখানো
              বুলি আত্মস্থ করছো না, তাহলে তুমি নির্ভয়ে, নিশ্চিন্তে অগ্রসর হও। যে
              কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো,
              তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা।
            </p>
          </span>
        )}
        <div className='flex justify-start lg:gap-x-40 xl:gap-x-80 items-start'>
          <div className='flex justify-center items-center gap-3'>
            <Image src={images.studentPngWhite} alt='student_svg' />
            <div className='flex flex-col'>
              <span className='text-3xl text-white font-semibold'>৩০০০+</span>
              <p className='text-white mt-2'>শিক্ষার্থীর সংখ্যা</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <Image src={images.chairSvg} alt='blackboard_image' />
            <div className='flex flex-col justify-between'>
              <span className='text-3xl text-white font-semibold'>৫০০০+</span>
              <p className='text-white mt-2 font-base'>আসন সংখ্যা</p>
            </div>
          </div>
        </div>
        <div className='flex justify-start lg:gap-x-40 xl:gap-x-80 items-start'>
          <div className='flex justify-center items-center gap-3'>
            <Image src={images.blackboardSvg} alt='student_svg' />
            <div className='flex flex-col'>
              <span className='text-3xl text-white font-semibold'>৫০০+</span>
              <p className='text-white mt-2'>শ্রেণীকক্ষের সংখ্যা</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3 -ml-5'>
            <Image src={images.teacherSvg} alt='blackboard_image' />
            <div className='flex flex-col justify-between'>
              <span className='text-3xl text-white font-semibold'>৫০০+</span>
              <p className='text-white mt-2 font-base'>শিক্ষক/শিক্ষিকা</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={images.studentHoldingBooks} width={600} height={600} />
    </div>
  );
};

export default StatisticsSection;
