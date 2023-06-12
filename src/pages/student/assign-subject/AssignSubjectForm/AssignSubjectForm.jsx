import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Add, RoundCross } from "../../../../constants/icons";
import AssignSubjectFormSelector from "./AssignSubjectFormSelector";
import SubjectSelector from "./SubjectSelector";

const AssignSubjectForm = () => {
  const router = useRouter();
  const [showForms, setShowForms] = useState(true);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className='w-full mx-auto pt-5 pb-10 px-8 bg-white border border-[#0D153026] rounded'>
      <div className='mb-5 text-xl font-semibold'>
        <h2>Assign Subject</h2>
      </div>
      <form>
        <div className='flex justify-between items-center gap-10 w-full mb-7'>
          <AssignSubjectFormSelector />
          <AssignSubjectFormSelector />
          <AssignSubjectFormSelector />
        </div>

        {showForms ? (
          <div>
            <SubjectSelector />
          </div>
        ) : (
          <div className='flex justify-between items-center gap-10 w-full'>
            <AssignSubjectFormSelector />
            <AssignSubjectFormSelector />
            <AssignSubjectFormSelector />
          </div>
        )}
        <span className='space-x-1 mb-12 mt-2.5 flex justify-start items-center'>
          <input
            type='checkbox'
            id='class9'
            className='w-[14px] h-[14px]'
            onChange={() => setShowForms(!showForms)}
          />
          <label
            htmlFor='class9'
            className='font-semibold text-gray-700 text-md -mt-[1px]'>
            Select Subject For Class 9 and 10
          </label>
        </span>

        {/* <-----------------------------------Assigned Subject List---------------------------------> */}
        <div>
          <div className='mb-2'>
            <p className='text-gray-500 font-semibold'>Selected Subjects</p>
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
        <div className='flex justify-end items-end mt-6'>
          <button className='py-1.5 px-12 rounded text-md text-white bg-[#1EB3A6] font-semibold'>
            Save
          </button>
        </div>
      </form>

      <button
        className='flex justify-center items-center gap-1  -mt-8'
        onClick={() => router.push("/student/assign-subject/add-new-subject")}>
        <Add className='w-5 h-5 text-primary -mt-[2.5px]' /> Add New Subject
      </button>
    </div>
  );
};

export default AssignSubjectForm;
