import React from "react";
import CreateAdmitCardFormSelector from "./CreateAdmitCardFormSelector";

const CreateAdmitCardForm = () => {
  return (
    <div>
      <div className='w-[550px] h-[280px] mx-auto my-10 bg-white rounded shadow-sm ring-[0.5px] ring-gray-300'>
        {/* Schedule form */}
        <form className='px-8 py-8'>
          <div className='flex justify-center items-center gap-8'>
            <div className='flex flex-col justify-start font-semibold items-start gap-[38px]'>
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
              <CreateAdmitCardFormSelector />
              <CreateAdmitCardFormSelector />
              <CreateAdmitCardFormSelector />
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

export default CreateAdmitCardForm;
