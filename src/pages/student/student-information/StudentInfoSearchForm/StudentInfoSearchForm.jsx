import React from "react";
import StudentInfoSearchFormSelector from "./StudentInfoSearchFormSelector";

const StudentInfoSearchForm = () => {
  return (
    <div className='w-full mx-auto py-5 px-3 bg-white border border-[#0D153026] rounded-2xl'>
      <form>
        <div className='flex justify-center items-center gap-10 w-full'>
          <input
            type='text'
            className='py-2 placeholder:text-sm px-3 border border-gray-300 rounded shadow-sm w-80 outline-none'
            placeholder='Class'
          />

          <input
            type='text'
            className='py-2 placeholder:text-sm px-3 border border-gray-300 rounded shadow-sm w-80 outline-none'
            placeholder='Exam Name'
          />
          <StudentInfoSearchFormSelector />
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

export default StudentInfoSearchForm;
