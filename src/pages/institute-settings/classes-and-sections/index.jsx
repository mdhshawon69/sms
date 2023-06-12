import React from "react";
import { useState } from "react";
import ClassesList from "./ClassesList/ClassesList";
import ClassesTagsInput from "./ClassesTagsInput/ClassesTagsInput";

const ClassesAndSectionsPage = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className='pb-52'>
      <div className='w-full mx-auto pt-5 pb-10 px-8 bg-white border border-[#0D153026] rounded'>
        <div className='mb-5 text-xl font-semibold'>
          <h2>Add New Class or Section</h2>
        </div>
        <form>
          <div className='flex justify-between items-center gap-10 w-full mb-7'>
            <input
              type='text'
              className='w-1/2 py-2 rounded placeholder:text-sm px-2 border border-gray-300 outline-none'
              placeholder='New Class Name'
            />
            <input
              type='text'
              className='w-1/2 py-2 rounded placeholder:text-sm px-2 border border-gray-300 outline-none'
              placeholder='New Group Name'
            />
          </div>
          <div>
            <ClassesTagsInput />
          </div>

          <div className='flex justify-end items-end mt-6'>
            <button className='py-1.5 px-12 rounded text-md text-white bg-[#1EB3A6] font-semibold'>
              Save
            </button>
          </div>
        </form>
        {/* <-----------------------------------Classes and Sections List---------------------------------> */}
        <div>
          <div className='mb-2'>
            <p className='text-gray-500 font-semibold'>Existing Classes</p>
          </div>

          <div className='flex justify-between gap-3'>
            <div className='w-1/2 overflow-hidden'>
              {arr.map((item, i) => (
                <ClassesList
                  bg={i % 2 ? "bg-[#F8F7F7]" : "bg-[#F1F1F1]"}
                  key={i}
                />
              ))}
            </div>
            <div className='w-1/2 overflow-hidden'>
              {arr.map((item, i) => (
                <ClassesList
                  bg={i % 2 ? "bg-[#F8F7F7]" : "bg-[#F1F1F1]"}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesAndSectionsPage;
