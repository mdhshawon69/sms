import React from "react";

const StudentAdmitCardSearchForm = () => {
  return (
    <div className='w-3/5 mx-auto py-8 px-3 bg-white'>
      <form>
        <div className='flex justify-center items-center gap-5'>
          <input
            type='text'
            className='w-72 py-2 px-2 ring-1 ring-gray-300 rounded shadow-sm outline-none'
            placeholder='Name'
          />
          <input
            type='text'
            className='w-72 py-2 placeholder:text-sm px-2 ring-1 ring-gray-300 rounded shadow-sm outline-none'
            placeholder='Roll'
          />
        </div>
        <div className='w-full px-6 text-right mt-8'>
          <button className='text-white bg-primary py-2 px-10 rounded-sm'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentAdmitCardSearchForm;
