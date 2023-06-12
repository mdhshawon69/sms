import React from "react";
import MarkDistributionFormSelector from "./MarkDistributionFormSelector";

const MarkDistributionForm = () => {
  return (
    <div>
      <div className='w-[550px] h-[340px] mx-auto my-10 bg-white rounded shadow-sm ring-[0.5px] ring-gray-300'>
        {/* Schedule form */}
        <form className='px-8 py-8'>
          <div className='flex justify-center items-center gap-8'>
            <div className='flex flex-col justify-start items-start gap-[38px] font-semibold'>
              <label htmlFor=''>Exam Name</label>
              <label htmlFor=''>Class</label>
              <label htmlFor=''>Subject</label>
              <label htmlFor=''>Session</label>
            </div>

            <div className='flex flex-col justify-center items-center gap-[38px] font-semibold'>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
              <MarkDistributionFormSelector />
              <MarkDistributionFormSelector />
              <MarkDistributionFormSelector />
              <MarkDistributionFormSelector />
            </div>
          </div>

          <div className='text-right mt-5'>
            <button
              type='submit'
              className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarkDistributionForm;
