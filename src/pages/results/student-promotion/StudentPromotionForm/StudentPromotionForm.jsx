import React from "react";
import { Cross } from "../../../../constants/icons";
import StudentPromotionSelector from "./StudentPromotionSelector";

const StudentPromotionForm = ({ setShowModal }) => {
  return (
    <div>
      <div className='w-[450px] h-[380px] bg-white rounded relative'>
        <button onClick={() => setShowModal(false)}>
          <Cross className='absolute top-2 right-2 text-[#7B7B7B]' />
        </button>
        <div>
          <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
            Student Promotion
          </h2>
          <div className='mb-7'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
              <span className='w-[300px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
              <span className='w-[200px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
            </div>
          </div>
        </div>

        {/* Schedule form */}
        <form className='px-8'>
          <div className='flex justify-center items-center gap-8'>
            <div className='flex flex-col justify-start items-start gap-[38px]'>
              <label htmlFor=''>Exam Name</label>
              <label htmlFor=''>Exam Year</label>
              <label htmlFor=''>Class</label>
            </div>

            <div className='flex flex-col justify-center items-center gap-[38px]'>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
              <StudentPromotionSelector />
              <StudentPromotionSelector />
              <StudentPromotionSelector />
            </div>
          </div>

          <div className='text-right mt-5'>
            <button
              type='submit'
              className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold'>
              Promote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentPromotionForm;
