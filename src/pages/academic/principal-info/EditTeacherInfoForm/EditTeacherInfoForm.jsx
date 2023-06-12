import React from "react";
import { Cross } from "../../../../constants/icons";

const EditTeacherInfoForm = ({ setShowModal, title }) => {
  return (
    <div className='w-[500px] h-[490px] bg-white rounded relative'>
      <button onClick={() => setShowModal(false)}>
        <Cross className='absolute top-3 right-3 text-[#7B7B7B]' />
      </button>
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          {title}
        </h2>
        <div className='mb-7'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[350px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[250px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      <form className='px-5'>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex flex-col justify-start items-start gap-[31px]'>
            <p>Name</p>
            <p>Position</p>
            <p>Phone</p>
            <p>Email</p>
            <p>Address</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-[31px]'>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <input
              type='text'
              className='py-1 px-2 w-72 border border-gray-400 outline-none'
            />
            <input
              type='text'
              className='py-1 px-2 w-72 border border-gray-400 outline-none'
            />
            <input
              type='text'
              className='py-1 px-2 w-72 border border-gray-400 outline-none'
            />
            <input
              type='text'
              className='py-1 px-2 w-72 border border-gray-400 outline-none'
            />
            <label
              htmlFor='file'
              className='file w-72 ring-1 ring-gray-400 outline-none flex justify-start items-start gap-1'>
              <span className='text-sm xl:py-2 lg:py-2 lg:px-2 bg-[#EFEFEF]'>
                Choose File
              </span>
              <span className='text-sm px-4 xl:py-2 lg:py-1.5'>
                No file choosen
              </span>
              <input type='file' name='image' id='file' />
            </label>
          </div>
        </div>

        <div className='text-right mt-4'>
          <button
            type='submit'
            className='py-2 px-8 mr-1 mt-5 rounded-sm bg-primary text-white text-xs font-semibold'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTeacherInfoForm;
