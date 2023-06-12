import React from "react";

const AllResultSearchForm = () => {
  return (
    <div className='w-3/4 mx-auto py-5 px-3 mt-20 mb-16 bg-white border border-[#0D153026] rounded-2xl'>
      <form>
        <div className='flex justify-center items-center gap-5 w-full'>
          <div className='flex justify-center items-center gap-4'>
            <label htmlFor=''>Name :</label>
            <input
              type='text'
              className='py-1 px-2 border border-gray-400 rounded outline-none'
            />
          </div>
          <div className='flex justify-center items-center gap-4'>
            <label htmlFor=''>Roll :</label>
            <input
              type='text'
              className='py-1 px-2 border border-gray-400 rounded outline-none'
            />
          </div>
        </div>
        <div className='flex justify-end items-end mt-6'>
          <button className='mr-6 py-1.5 px-9 rounded text-md text-white bg-[#1EB3A6] font-semibold'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default AllResultSearchForm;
