import React from "react";
import CreateMarksheetFormSelector from "./CreateMarksheetFormSelector";

const CreateMarksheetForm = () => {
  return (
    <div className='w-[550px] h-[280px] mx-auto bg-white rounded py-7 border border-gray-300'>
      {/* Creation form */}
      <form className='px-8'>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex flex-col justify-start items-start gap-[38px] font-semibold'>
            <label htmlFor=''>Exam Name</label>
            <label htmlFor=''>Session</label>
            <label htmlFor=''>Class</label>
          </div>

          <div className='flex flex-col justify-center items-center gap-[38px] font-semibold'>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <CreateMarksheetFormSelector />
            <CreateMarksheetFormSelector />
            <CreateMarksheetFormSelector />
          </div>
        </div>

        <div className='text-right mt-5'>
          <button
            type='submit'
            className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMarksheetForm;
