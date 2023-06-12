import React from "react";
import { Cross } from "../../../../constants/icons";
import AdmitCardPrintFormSelector from "./AdmitCardPrintFormSelector";

const AdmitCardPrintForm = ({ setShowModal }) => {
  return (
    // Print Admit Card area
    <div className='w-[450px] h-[530px] bg-white rounded relative'>
      <button onClick={() => setShowModal(false)}>
        <Cross className='absolute top-3 right-3 text-[#7B7B7B]' />
      </button>
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          Print Admit Card
        </h2>
        <div className='mb-7'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[250px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[150px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      {/* Print Admit Card Form */}
      <form className='px-10'>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex flex-col justify-start items-start gap-[31px]'>
            <label htmlFor=''>Class</label>
          </div>

          <div className='flex flex-col justify-center items-center gap-[31px]'>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex justify-between items-center gap-3'>
              <AdmitCardPrintFormSelector />
              <button
                type='submit'
                className='py-[12px] -mb-1 px-8 rounded-sm bg-primary text-white text-xs font-semibold'>
                Find
              </button>
            </div>
          </div>
        </div>
        <button className='py-2 px-4 my-8 block mx-auto rounded text-white bg-yellow text-sm'>
          Print All
        </button>
      </form>

      {/* Data Select area */}
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          Date Select
        </h2>
        <div className='mb-7'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[250px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[150px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      {/* Data Select Form */}
      <form className='px-10'>
        {/* Data Select inputs */}
        <div className='flex gap-3'>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex flex-col justify-start items-start gap-[31px]'>
              <label htmlFor=''>Start</label>
            </div>

            <div className='flex flex-col justify-center items-center gap-[31px]'>
              <p>:</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
              <div className='flex justify-between items-center gap-3'>
                <input
                  type='text'
                  className='w-32 py-1 px-2 border border-[#0D153099] outline-none'
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex flex-col justify-start items-start gap-[31px]'>
              <label htmlFor=''>End</label>
            </div>

            <div className='flex flex-col justify-center items-center gap-[31px]'>
              <p>:</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
              <div className='flex justify-between items-center gap-3'>
                <input
                  type='text'
                  className='w-32 py-1 px-2 border border-[#0D153099] outline-none'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='text-center space-x-5 mt-3'>
          <button className='py-2 w-24 mt-5 mx-auto rounded text-white bg-primary text-sm'>
            Find
          </button>
          <button className='py-2 w-24 mt-5 mx-auto rounded text-white bg-yellow text-sm'>
            Print All
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmitCardPrintForm;
