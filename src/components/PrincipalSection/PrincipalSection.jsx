import Image from "next/image";
import React from "react";
import { useState } from "react";
import images from "../../assets";
import { Edit } from "../../constants/icons";

// <---------------The parent component is index/Homepage.jsx---------------------->

const PrincipalSection = () => {
  const [heading, setHeading] = useState(false);
  const [paragraph, setParagraph] = useState(false);
  return (
    <div className='lg:h-[90vh] xl:h-[60vh] lg:py-20 lg:my-20 xl:py-10 xl:mb-10 flex justify-between'>
      <div className='relative w-1/5 -mt-10'>
        <div className='w-[400px] h-[500px] absolute left-0 top-10 bg-[#A6C9CF]'>
          <div className='absolute top-[-75px] left-[168px] w-[470px]'>
            <Image src={images.womenPrincipal} height={692} />
          </div>
        </div>
      </div>
      <div className='w-2/4 space-y-4 flex flex-col pr-60 mt-10 font-bangla'>
        <h4 className='text-[#FF9900] font-semibold text-xl'>প্রধান অধ্যক্ষ</h4>
        {heading ? (
          <input
            type='text'
            className='w-full bg-transparent border border-gray-300 h-[70px] text-4xl outline-none mb-5 font-semibold'
          />
        ) : (
          <h2 className='text-[#0D1530CC] font-bold text-4xl leading-[60px] flex gap-3 justify-start'>
            <span className='bg-white w-8 h-8 mt-3 rounded-full shadow-md -ml-10 flex justify-center items-center cursor-pointer border border-gray-300'>
              <button onClick={() => setHeading(true)}>
                <Edit className='text-primary w-5 h-5' />
              </button>
            </span>
            ড. সাবরিনা সুলতানা - <br /> পূর্ব রামপুরা স্কুল এন্ড কলেজ
          </h2>
        )}
        {paragraph ? (
          <textarea className='w-[520px] bg-transparent border border-gray-300 h-40 text-md outline-none'></textarea>
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
      </div>
    </div>
  );
};

export default PrincipalSection;
