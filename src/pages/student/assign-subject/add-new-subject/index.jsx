import React from "react";
import NewSubjectSelector from "./NewSubjectSelector/NewSubjectSelector";
import { RoundCross } from "../../../../constants/icons";
import { useState } from "react";

const AddNewSubjectPage = () => {
  const [showForms, setShowForms] = useState(true);
  const arr = [1, 2, 3, 4, 5];
  const arr2 = [1];
  return (
    <div className='w-full mx-auto pt-5 pb-10 px-8 bg-white border border-[#0D153026] rounded'>
      <div className='mb-5 text-xl font-semibold'>
        <h2>Assign Subject</h2>
      </div>
      <form>
        <div className='flex justify-between items-center gap-5 w-full mb-7'>
          <NewSubjectSelector />
          <NewSubjectSelector />
        </div>

        {/* Checkbox for switching the inputs for main subject and optional subject */}
        <span className='space-x-1 mb-2 mt-2.5 flex justify-start items-center'>
          <input
            type='checkbox'
            id='class9'
            className='w-[14px] h-[14px]'
            onChange={() => setShowForms(!showForms)}
          />
          <label
            htmlFor='class9'
            className='font-semibold text-gray-700 text-md -mt-[1px]'>
            Check to add optional subject
          </label>
        </span>

        {showForms ? (
          // Inputs for adding Main subjects
          <div className='space-y-7'>
            <input
              type='text'
              placeholder='New Subject Name'
              className='py-2 placeholder:text-sm px-3 w-full border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='New Subject Code'
              className='py-2 placeholder:text-sm px-3 w-full border border-gray-300 rounded'
            />
          </div>
        ) : (
          // Inputs for adding Optional subjects
          <div className='space-y-7'>
            <input
              type='text'
              placeholder='New Optional Subject Name'
              className='py-2 rounded placeholder:text-sm px-3 w-full border border-gray-300'
            />
            <input
              type='text'
              placeholder='New optional Subject Code'
              className='py-2 rounded placeholder:text-sm px-3 w-full border border-gray-300'
            />
          </div>
        )}

        <div className='flex justify-end items-end mt-6'>
          <button className='py-1.5 px-12 rounded text-md text-white bg-[#1EB3A6] font-semibold'>
            Save
          </button>
        </div>
      </form>
      {/* <-----------------------------------Assigned Subject List---------------------------------> */}
      <div className='mt-10'>
        {/* Existing Subjects  */}
        <div>
          <div className='mb-2 flex justify-between items-center'>
            <p className='text-gray-500 font-semibold'>Existing Subjects</p>
            <button className='text-red-500'>Clear All</button>
          </div>
          <div className='first:rounded-tl first:rounded-tr'>
            {arr.map((item, i) => (
              <span
                className={`w-full flex justify-between items-center px-2 py-1 ${
                  i % 2 ? "bg-[#F8F7F7]" : "bg-[#F1F1F1]"
                }`}>
                <p>1. Bangla 101</p>
                <button>
                  <RoundCross className='w-5 h-5 text-red-500' />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Existing Optional Subjects */}
        <div className='mt-10'>
          <div className='mb-2 flex justify-between items-center'>
            <p className='text-gray-500 font-semibold'>
              Existing Optional Subjects
            </p>
            <button className='text-red-500'>Clear All</button>
          </div>
          <div className='first:rounded-tl first:rounded-tr'>
            {arr2.map((item, i) => (
              <span
                className={`w-full flex justify-between items-center px-2 py-1 ${
                  i % 2 ? "bg-[#F8F7F7]" : "bg-[#F1F1F1]"
                }`}>
                <p>1. Biology 109</p>
                <button>
                  <RoundCross className='w-5 h-5 text-red-500' />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewSubjectPage;
