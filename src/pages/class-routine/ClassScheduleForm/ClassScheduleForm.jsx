import React from "react";
import { Cross } from "../../../constants/icons";
import ClassScheduleSelector from "./ClassScheduleSelector";

const ClassScheduleForm = ({ setShowModal }) => {
  return (
    <div className='w-[450px] h-[400px] bg-white rounded mx-auto border border-gray-300'>
      {/* Schedule form */}
      <form className='px-10 py-8'>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex flex-col justify-start items-start gap-[31px]'>
            <label htmlFor=''>Weekend</label>
            <label htmlFor=''>Class Time</label>
            <label htmlFor=''>Class Time</label>
            <label htmlFor=''>Class Time</label>
            <label htmlFor=''>Class Time</label>
          </div>

          <div className='flex flex-col justify-center items-center gap-[31px]'>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <ClassScheduleSelector />
            <input
              type='text'
              className='py-1 px-2 border border-gray-400 outline-none rounded'
            />
            <input
              type='text'
              className='py-1 px-2 border border-gray-400 outline-none rounded'
            />
            <input
              type='text'
              className='py-1 px-2 border border-gray-400 outline-none rounded'
            />
            <input
              type='text'
              className='py-1 px-2 border border-gray-400 outline-none rounded'
            />
          </div>
        </div>
        <div className='mt-5'>
          <button className='text-primary font-semibold text-sm'>
            Add Class Time
          </button>
        </div>

        <div className='text-right mt-4'>
          <button
            type='submit'
            className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassScheduleForm;
