import React from "react";
import Image from "next/image";
import images from "../../../assets";

const AdmitCard = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className='w-full mx-auto pt-5 pb-1 px-10 text-primary-text bg-white relative mt-16 border border-gray-300'>
        <div className='absolute lg:top-[30%] lg:left-[200px] xl:left-[350px]'>
          <Image src={images.bigLogo} height={550} width={550} />
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
          <div className='flex justify-between items-center mt-5 mb-8'>
            <Image src={images.qr} height={100} width={100} />
            <Image src={images.studentImg} height={120} width={120} />
          </div>
          <div className='flex justify-between capitalize'>
            <div className='font-corsiva flex justify-between items-center capitalize '>
              <div className='space-y-5 font-semibold text-base'>
                <p>name</p>
                <p>father's name</p>
                <p>mother's name</p>
                <p>class</p>
                <p>exam date</p>
              </div>
              <div className='mx-14 space-y-5'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='space-y-5 font-bangal font-bold text-md'>
                <p>Mahmudul Haque</p>
                <p>Anamul Haque</p>
                <p>Hosneara Pervin</p>
                <p>Nine</p>
                <p>11/12/20022</p>
              </div>
            </div>
            <div className=' flex justify-between capitalize gap-x-7'>
              <div className='font-semibold text-base'>
                <p>roll</p>
              </div>
              <div className=' space-y-5'>
                <p>:</p>
              </div>
              <div className='font-bangla font-bold flex justify-start items-start flex-nowrap'>
                <p className='font font-semibold text-lg px-4 border border-primary-text'>
                  2
                </p>
                <p className='font font-semibold text-lg px-4 border border-primary-text'>
                  2
                </p>
                <p className='font font-semibold text-lg px-4 border border-primary-text'>
                  2
                </p>
                <p className='font font-semibold text-lg px-4 border border-primary-text'>
                  2
                </p>
                <p className='font font-semibold text-lg px-4 border border-primary-text'>
                  2
                </p>
                <p className='font font-semibold text-lg px-4 border border-primary-text'>
                  2
                </p>
              </div>
            </div>
          </div>
          <div className='w-full mx-auto mt-40 font-bangla'>
            <h3 className='font-bold text-xl flex flex-col gap-1 mb-5'>
              নির্দেশাবলীঃ
              <span className='bg-gray-400 py-[1px] w-52'></span>
            </h3>

            <div className='mb-14 space-y-6'>
              <p className='text-sm font-[500]'>
                ১. অনলাইনে প্রদত্ত প্রবেশপত্র অবশ্যই A4 সাইজের অফসেট কাগজে কালার
                প্রিন্ট করতে হবে। প্রবেশপত্রে প্রার্থীর রঙিন ছবি এবং তথ্যসমূহ
                স্পষ্টভাবে মুদ্রিত থাকতে হবে। অনলাইনে আবেদন করার সময় আপলোডকৃত
                ছবিটিই চূড়ান্ত বলে গণ্য হবে।
              </p>
              <p className='text-sm font-[500]'>
                ২.।Pay Slip Download করার জন্য এখানে ক্লিক করুন এবং Student
                Applicant Copy Download করার জন্য এখানে ক্লিক করুন।
              </p>
            </div>
            <div className='mb-14 space-y-6'>
              <p className='text-sm font-[500]'>
                ৩.। Download কৃত Pay Slip ও Applicant Copy সংশ্লিষ্ট প্রতিষ্ঠানে
                জমা দিন এবং আপনার সন্তানের ভর্তি প্রক্রিয়া সম্পূর্ণ করুন।
              </p>
              <p className='text-sm font-[500]'>
                ৪. Online এ Admission Fee Payment এর জন্য Student ID জানা আবশ্যক
                । Student ID ব্যবহার করে আপনার Admission ফিস কত হয়েছে বা কত টাকা
                পরিশোধ করতে হবে তা জানতে এবং Admission ফিস এর টাকা পরিশোধ করুন।
              </p>
              <p className='text-sm font-[500]'>
                ৫.।Pay Slip Download করার জন্য এখানে ক্লিক করুন এবং Student
                Applicant Copy Download করার জন্য এখানে ক্লিক করুন।
              </p>
            </div>
            <p className='text-sm font-[500]'>
              ৬.। Download কৃত Pay Slip ও Applicant Copy সংশ্লিষ্ট প্রতিষ্ঠানে
              জমা দিন এবং আপনার সন্তানের ভর্তি প্রক্রিয়া সম্পূর্ণ করুন।
            </p>
          </div>
          <div>
            <div className='flex justify-between items-center mt-40'>
              <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
                <span className='bg-gray-800 py-[0.5px] w-64'></span>
                Received By
              </h3>
              <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
                <span className='bg-gray-800 py-[0.5px] w-64'></span>
                Payment By
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

export default AdmitCard;
