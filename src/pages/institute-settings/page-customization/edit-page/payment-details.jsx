import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { LayoutSecond } from "../../../../components";
import { Edit } from "../../../../constants/icons";
import { uiActions } from "../../../../redux/store/slices/uiSlices";
import { ShowContext } from "../../../_app";

const AdmissionInstructions = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  if (router.asPath.includes("/edit-page")) {
    dispatch(uiActions.setLayout());
  }
  return (
    <LayoutSecond>
      {/* -------------------------------Admission Instructions-------------------------------- */}

      <div className='w-4/5 mx-auto my-10 py-20'>
        <div className='w-full mx-auto my-20 font-bangla'>
          <div className='space-y-5'>
            <h3 className='font-semibold text-xl flex flex-col justify-start items-start'>
              <span className='flex justify-start items-center gap-4'>
                <span className='bg-white w-6 h-6 rounded-full shadow-md -ml-10 flex justify-center items-center cursor-pointer border border-gray-300'>
                  <Edit className='text-primary w-4 h-4' />
                </span>
                Admission এর নির্দেশাবলীঃ
              </span>

              <span className='bg-[#1EB3A6] py-[1px] w-[270px]'></span>
            </h3>
            <p>
              ১। Online এ Admission Fee Payment এর জন্য Student ID জানা আবশ্যক
              Student ID ব্যবহার করে আপনার Admission ফিস কত হয়েছে বা কত টাকা
              পরিশোধ করতে হবে তা জানতে এবং Admission ফিস এর টাকা পরিশোধ করুন।
            </p>
            <p>
              ২। Pay Slip Download করার জন্য{" "}
              <a href='#' className='p-1 text-white rounded bg-[#1EB3A6]'>
                এখানে ক্লিক
              </a>{" "}
              করুন এবং Student Applicant Copy Download করার জন্য{" "}
              <a href='#' className='p-1 text-white rounded bg-[#1EB3A6]'>
                এখানে ক্লিক
              </a>{" "}
              করুন।
            </p>
            <p>
              ৩। Download কৃত Pay Slip ও Applicant Copy সংশ্লিষ্ট প্রতিষ্ঠানে
              জমা দিন এবং আপনার সন্তানের ভর্তি প্রক্রিয়া সম্পূর্ণ করুন।
            </p>
          </div>
        </div>
        {/* -------------------------------Online Monthly fee Payment Instructions------------------------------- */}
        <div className='w-full mx-auto my-20 font-bangla'>
          <div className='space-y-5'>
            <h3 className='font-semibold text-xl flex flex-col justify-start items-start'>
              <span className='flex justify-start items-center gap-4'>
                <span className='bg-white w-6 h-6 rounded-full shadow-md -ml-10 flex justify-center items-center cursor-pointer border border-gray-300'>
                  <Edit className='text-primary w-4 h-4' />
                </span>
                Online Monthly Fee Payment এর নির্দেশাবলীঃ
              </span>

              <span className='bg-[#1EB3A6] py-[1px] w-[460px]'></span>
            </h3>
            <p>
              ১। Online এ Monthly Fee Payment এর জন্য Student ID জানা আবশ্যক ।
              শিক্ষার্থীরা --{" "}
              <a href='#' className='p-1 text-white rounded bg-[#1EB3A6]'>
                এখানে ক্লিক
              </a>{" "}
              -- করে বর্তমান Class এবং Section এর নাম Select করে Student ID জেনে
              নিন। Student ID না পেলে সংশ্লিষ্ঠ স্কুল ও কলেজে যোগাযোগ করুন।
            </p>
            <p>
              ২। Student ID পেলে আপনার বকেয়া ফিস কত হয়েছে বা কত টাকা পরিশোধ করতে
              হবে তা জানতে --{" "}
              <a href='#' className='p-1 text-white rounded bg-[#1EB3A6]'>
                এখানে ক্লিক
              </a>{" "}
              -- করুন।
            </p>
            <p>
              ৩। বকেয়া ফিস কত হয়েছে বা কত টাকা পরিশোধ করতে হবে, তা জেনে থাকলে
              নিম্নের পদ্ধতিতে বকেয়া টাকা পরিশোধ করুন।
            </p>
            <p>
              ৪। Pay Slip Download করার জন্য --{" "}
              <a href='#' className='p-1 text-white rounded bg-[#1EB3A6]'>
                এখানে ক্লিক
              </a>{" "}
              -- করুন।
            </p>
            <p>
              ৫। Student Ledger Download করার জন্য --{" "}
              <a href='#' className='p-1 text-white rounded bg-[#1EB3A6]'>
                এখানে ক্লিক
              </a>{" "}
              -- করুন (বিঃদ্রঃ Payment করার একদিন পর Student Ledger টি Update
              হবে)।
            </p>
          </div>
        </div>{" "}
        {/* -------------------------DBBL Rocket account --> mobile pay---------------------------- */}
        <div className='w-full mx-auto my-20 font-bangla'>
          <div className='space-y-5'>
            <h3 className='font-semibold text-xl flex flex-col justify-start items-start'>
              <span className='flex justify-start items-center gap-4'>
                <span className='bg-white w-6 h-6 rounded-full shadow-md -ml-10 flex justify-center items-center cursor-pointer border border-gray-300'>
                  <Edit className='text-primary w-4 h-4' />
                </span>
                DBBL Rocket Account থেকে ডায়াল *৩২২# (Biller ID: 2580)
              </span>

              <span className='bg-[#1EB3A6] py-[1px] w-[590px]'></span>
            </h3>
            <p>1. Bill Pay</p>
            <p>
              1. Self (আবেদনকারী নিজ অভিভাবকের নম্বর হতে ফি পরিশাধের জন্য) Or
            </p>
            <p>
              2. Other (Agent) বা অন্য কারো নম্বর হতে ফি পরিশোধ করলে Other
              Select করার পরে আবেদনকারীর অভিভাবকের মোবাইল নম্বর দিতে হবে।
            </p>
            <p>0. Others নির্বাচন করুন ।</p>
            <p>
              # Enter Biller ID: এখানে রাজশাহী সরকারি মডেল স্কুল এন্ড কলেজের
              Biller ID 2580 বসাতে হবে।
            </p>
            <p># Enter Bill Number: এখানে শিক্ষার্থীর Student ID বসাতে হবে।</p>
            <p>
              # Enter Amount: এখানে বকেয়া ফিস কত হয়েছে বা কত টাকা পরিশোধ করতে
              হবে সেই পরিমান টাকা লিখুন (Rocket চার্জ আলাদা ভাবে কর্তন করা হবে
              )।
            </p>
            <p># Rocket Account এর Pin দিন এবং Payment সম্পূর্ণ করুন।</p>
            <p>রকেট এ্যাপস ব্যবহার করে ফি পরিশোধ করা যাবে।</p>
          </div>
        </div>{" "}
        {/* -----------------------------DBBL Rocket payment --> App------------------------------ */}
        <div className='w-full mx-auto my-20 font-bangla'>
          <div className='space-y-5'>
            <h3 className='font-semibold text-xl flex flex-col justify-start items-start'>
              <span className='flex justify-start items-center gap-4'>
                <span className='bg-white w-6 h-6 rounded-full shadow-md -ml-10 flex justify-center items-center cursor-pointer border border-gray-300'>
                  <Edit className='text-primary w-4 h-4' />
                </span>
                DBBL Rocket Mobile App (Biller ID: 3086)
              </span>

              <span className='bg-[#1EB3A6] py-[1px] w-[430px]'></span>
            </h3>
            <div className='py-3'>
              <p className='font-semibold'>
                রকেট এ্যাপস ব্যবহার করে ফি পরিশোধের জন্য নিম্নলিখিত ধাপ সমূহ
                অনুসরণ করুনঃ
              </p>
            </div>
            <p>১। মোবাইল নম্বর ও পিন নম্বর দিয়ে রকেট এ্যাপস এ লগ ইন করুন।</p>
            <p>২। বিল পে অপশন নির্বাচন করুন।</p>
            <p>৩। Biller ID: 3086 লিখুন । (East Rampura High School)</p>
            <p>৪। Bill No: এখানে Student ID লিখুন।</p>
            <p>
              ৫ For : Self (শিহ্মার্থী নিজ অভিভাবকের নম্বর হতে ফি পরিশাধের
              জন্য), Other (অন্য কারও নম্বর হতে ফি পরিশোধ করলে Other Select করার
              পরে শিহ্মার্থী অভিভাবকের মোবাইল নম্বর দিতে হবে।)
            </p>
            <p>
              ৬। VALIDATE এ ক্লিক করুন। এখানে শিহ্মার্থী নাম ও ফি এর পরিমাণ
              দেখাবে।
            </p>
            <p>
              ৭। OK ক্লিক করুন, আপনার প্রদত্ত তথ্যাদি সঠিক থাকলে রকেট হিসাবের
              পিন দিন এবং Payment সম্পূর্ণ করুন
            </p>
          </div>
        </div>{" "}
      </div>
    </LayoutSecond>
  );
};

export default AdmissionInstructions;
