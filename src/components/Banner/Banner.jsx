import React from "react";
import Image from "next/image";
import images from "../../assets";
import NavbarSecond from "../NavbarSecond/NavbarSecond";
import SubNav from "../SubNav/SubNav";
import { Edit, Camera } from "../../constants/icons";
import { useState } from "react";

// <---------------The parent component is index.jsx/Homepage + teacher-info.jsx + staff-info.jsx + about-us.jsx + contact.jsx---------------------->

const Banner = ({ path, navPath, subPath, setShowModal, paddingAlter }) => {
  const [heading, setHeading] = useState(false);
  const [paragraph, setParagraph] = useState(false);
  return (
    <div className='bg-primary -z-10'>
      <div className='w-4/5 mx-auto relative overflow-hidden'>
        {/* Conditionally setting the height of the banner for Homepage and also for other pages */}
        <SubNav subPath={subPath} />
        <NavbarSecond navPath={navPath} />

        <div
          className={`flex justify-between items-end lg:pb-24 xl:pb-40 banner-height relative ${
            path.heightAlter ? `lg:h-[65vh]` : `lg:banner-height`
          } w-full`}>
          <div className='text-white'>
            {/* Conditionally rendering the banner-texts for teacher-info and
            staff-info page or other pages */}

            {path.textAlter ? (
              <div className='font-kalpurush'>
                <h4 className='font-semibold text-xl my-2'>প্রধান অধ্যক্ষ</h4>
                <h2 className='font-bold lg:text-4xl lg:leading-[50px] xl:text-5xl xl:leading-[70px] mb-2'>
                  ড. সাবরিনা সুলতানা - <br /> পূর্ব রামপুরা স্কুল এন্ড কলেজ
                </h2>
                <p className='w-3/5 lg:text-md lg:leading-[30px] xl:text-xl xl:leading-[40px]'>
                  যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার
                  আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি
                  যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে
                  অন্যের শেখানো বুলি আত্মস্থ করছো না, তাহলে তুমি নির্ভয়ে,
                  নিশ্চিন্তে অগ্রসর হও।
                </p>
              </div>
            ) : (
              <div
                className={`${
                  !path.paddingAlter ? "pb-8" : "pb-4"
                } xl:space-y-10`}>
                {heading ? (
                  <input
                    type='text'
                    className='w-1/2 ml-14 bg-transparent border border-gray-300 h-[70px] text-4xl font-semibold outline-none mb-5'
                  />
                ) : (
                  <h1 className='lg:text-5xl font-bold xl:text-7xl mb-7 font-bangla flex justify-start items-center gap-5'>
                    <span className='bg-white w-8 h-8 rounded-full shadow-md flex justify-center items-center cursor-pointer'>
                      <button onClick={() => setHeading(true)}>
                        <Edit className='text-primary w-5 h-5' />
                      </button>
                    </span>
                    পূর্ব রামপুরা স্কুল এন্ড কলেজ
                  </h1>
                )}
                {paragraph ? (
                  <textarea
                    type='text'
                    className='w-[540px] ml-14 bg-transparent border border-gray-300 h-40 text-md outline-none'
                  />
                ) : (
                  <div className='flex gap-5'>
                    <span className='bg-white w-8 h-8 rounded-full shadow-md flex justify-center items-center cursor-pointer'>
                      <button onClick={() => setParagraph(true)}>
                        <Edit className='text-primary w-5 h-5' />
                      </button>
                    </span>
                    <p className='w-3/5 lg:leading-[30px] xl:leading-[40px] xl:text-2xl font-bangla flex justify-start items-center gap-5'>
                      যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা
                      করার আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ
                      কিনা তুমি যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে যে
                      কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার
                      আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা
                      তুমি যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে
                    </p>
                  </div>
                )}

                {path.btn && (
                  <div className='space-x-3 mt-7 xl:text-2xl'>
                    <button className='lg:ml-12 lg:px-8 lg:py-2 xl:px-16 xl:py-4 rounded-sm outline-none bg-yellow border border-white font-semibold'>
                      Log in
                    </button>
                    <a href='/'>Learn more</a>
                  </div>
                )}
              </div>
            )}

            {/* This button area is rendered conditionally as per the page url. It only renders for the Homepage */}
          </div>

          {/* Applying image width and height as per the page url passed in the props. It applies different image for Homepage and other pages. Also conditionally applying image for staff-info and teacher-info page */}
          {!path.imageAlter ? (
            <div
              className={`absolute ${
                path.heightAlter
                  ? "lg:h-[350px] lg:w-[230px] lg:-mb-24 xl:h-[550px] xl:w-[360px] xl:-mb-40 xl:right-20 lg:right-32"
                  : "lg:h-[85%] lg:w-[27%] xl:h-[800px] xl:w-[550px] xl:right-0 lg:right-16 lg:-mb-24 xl:-mb-40"
              }`}>
              <label className='w-14 h-14 rounded-full bg-white flex justify-center items-center file shadow-md absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2'>
                <Camera className='w-8 h-8 text-primary cursor-pointer' />
                <input type='file' />
              </label>
              <Image
                src={images.headerImage}
                alt='female-student-holding-books'
                layout='fill'
                objectFit='cover'
              />
            </div>
          ) : (
            <div
              className={`absolute ${
                path.heightAlter && "xl:h-[540px] xl:w-[450px] xl:-mb-28"
              } lg:h-[330px] lg:w-[280px] lg:-mb-24 lg:right-28 xl:right-16`}>
              <Image
                src={images.principalImg2}
                alt='Principal_image'
                layout='fill'
                objectFit='cover'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
