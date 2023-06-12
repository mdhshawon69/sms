import { useRouter } from "next/router";
import React from "react";
import { Youtube } from "../../constants/icons";

// <---------------The parent component is index/Homepage.jsx---------------------->

const LatestNews = () => {
  const router = useRouter();

  return (
    <div
      className={`w-full flex justify-center items-center z-30 ${
        router.asPath === "/" ? "fixed" : ""
      }`}>
      <div className='w-[9.43%] bg-yellow py-4 text-center font-semibold text-white ring-1 ring-white'>
        <p className='font-sans'>Latest News</p>
      </div>
      <div className='w-11/12 py-4 text-center bg-[#1EB3A6] flex justify-between items-center font-bangla'>
        <marquee>
          <div className='flex gap-5 items-center text-white'>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              <Youtube />
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default LatestNews;
