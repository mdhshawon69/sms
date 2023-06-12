import React from "react";
import Image from "next/image";
import images from "../../assets";
import { Edit } from "../../constants/icons";
import { useState } from "react";

// <---------------The parent component is index/Homepage.jsx---------------------->

const InfoSection = () => {
  const [heading, setHeading] = useState(false);
  const [paragraph, setParagraph] = useState(false);
  return (
    <div className='flex justify-around items-center w-4/5 h-[80vh] py-20 mt-20 lg:mb-32 xl:mb-0 mx-auto'>
      <div className='relative w-2/5 h-2/3'>
        <div className='absolute w-[440px] h-[390px] bg-[#5BC0B7] rounded-[20px]'></div>
        <div className='absolute mt-[-35%] ml-[-10%]'>
          <Image src={images.infoImage1} width={350} height={450} />
        </div>
        <div className='absolute mt-[40%] -right-5'>
          <Image src={images.infoImage2} width={350} height={250} />
        </div>
      </div>
      <div className='w-2/5 space-y-6 flex flex-col justify-start font-bangla'>
        <h4 className='text-[#FF9900] font-semibold text-xl'>
          প্রাতিষ্ঠানিক তথ্য
        </h4>

        {heading ? (
          <input
            type='text'
            className='w-full bg-transparent border border-gray-300 h-[70px] text-4xl outline-none mb-5 text-[#0D1530CC] font-semibold'
          />
        ) : (
          <span className='flex gap-3'>
            <span className='bg-white w-8 h-8 rounded-full shadow-md -ml-12 flex justify-center items-center cursor-pointer border border-gray-300'>
              <button onClick={() => setHeading(true)}>
                <Edit className='text-primary w-5 h-5' />
              </button>
            </span>
            <h2 className='text-[#0D1530CC] font-bold text-4xl flex justify-start items-center'>
              পূর্ব রামপুরা স্কুল এন্ড কলেজ
            </h2>
          </span>
        )}

        {paragraph ? (
          <textarea className='w-[490px] bg-transparent border text-md border-gray-300 h-40 outline-none'></textarea>
        ) : (
          <span className='flex gap-3 w-full'>
            <span className='bg-white w-8 h-8 rounded-full shadow-md -ml-9 flex justify-center items-center cursor-pointer border border-gray-300'>
              <button onClick={() => setParagraph(true)}>
                <Edit className='text-primary w-5 h-5' />
              </button>
            </span>
            <p className='text-[#0D1530CC] leading-10 w-full'>
              যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে
              ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি যদি
              নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে অন্যের শেখানো
              বুলি আত্মস্থ করছো না, তাহলে তুমি নির্ভয়ে, নিশ্চিন্তে অগ্রসর হও। যে
              কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো,
              তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা।
            </p>
          </span>
        )}

        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center gap-3'>
            <Image src={images.studentPng} alt='student_svg' />
            <div className='flex flex-col'>
              <span className='text-3xl text-[#1EB3A6] font-semibold'>
                ৩০০০+
              </span>
              <p className='text-[#0D1530CC] mt-2'>শিক্ষার্থীর সংখ্যা</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <Image src={images.blackboardSvg} alt='blackboard_image' />
            <div className='flex flex-col justify-between'>
              <span className='text-3xl text-[#1EB3A6] font-semibold'>
                ৫০০+
              </span>
              <p className='text-[#0D1530CC] mt-2 font-base'>
                শ্রেণীকক্ষের সংখ্যা
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
