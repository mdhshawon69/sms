import React from "react";
import Image from "next/image";
import images from "../../../assets";

const DetailPaymentSlip = () => {
  return (
    <div className='w-3/4 mx-auto'>
      <div className='w-full mx-auto pt-5 pb-1 px-10 text-primary-text bg-white relative border border-gray-300'>
        <div className='absolute lg:top-1/2 lg:left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Image src={images.bigLogo} height={450} width={450} />
        </div>
        <div className='text-center space-y-2'>
          <Image src={images.scllLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <p className='text-primary-text text-sm'>68, East Rampura, Dhaka</p>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Payment Slip - 2022
            <span className='bg-gray-800 py-[1px] w-48'></span>
          </h3>
        </div>

        <div className='w-full px-5 mx-auto my-14'>
          <div className='flex justify-end items-end mt-5 mb-16'>
            <div>
              <div className='flex justify-center items-center gap-x-4 border-b-2 px-2 border-gray-800'>
                <p className='font-semibold'>Due Date</p>
                <p>:</p>
                <p>20/07/2022</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between capitalize'>
            <div className='font-corsiva flex justify-between items-center capitalize '>
              <div className='space-y-4 font-semibold text-base'>
                <p>Student name</p>
                <p>class</p>
                <p>roll no</p>
              </div>
              <div className='mx-14 space-y-4'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='space-y-4 text-md'>
                <p>Shanto Kumar</p>
                <p>Ten</p>
                <p>9120</p>
              </div>
            </div>
            <div className=' flex justify-between capitalize'>
              <div className='w-1/5 font-semibold text-base space-y-4 -mr-10'>
                <p className='w-16'>Section</p>
                <p className='w-16'>Session</p>
                <p className='w-16'>Phone</p>
              </div>
              <div className='ml-24 mr-10 space-y-4'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='text-md space-y-4'>
                <p>Session</p>
                <p>2022</p>
                <p>01647622755</p>
              </div>
            </div>
          </div>

          <table className='w-full mx-auto mt-10 mb-[450px]'>
            <thead>
              <tr className='border-[0.5px] border-[#0D15304D]'>
                <th className='py-1 px-5 font-bold'>Sl</th>
                <th className='py-1 px-5 font-bold'>Description</th>
                <th className='py-1 px-5 font-bold'>Month</th>
                <th className='py-1 px-5 font-bold'>Amount</th>
                <th className='py-1 px-5 font-bold'>Due</th>
              </tr>
            </thead>
            <tbody>
              {/* ------------------------Admission fee row---------------------- */}
              <tr className='border-[0.5px] border-[#0D15304D]'>
                <td className='py-1 px-5 text-center font-semibold'>1</td>
                <td className='py-1 px-5 text-center font-semibold'>
                  Admission fee
                </td>
                <td className='py-1 px-5 text-center font-semibold'></td>
                <td className='py-1 px-5 text-center font-semibold'>500</td>
                <td className='py-1 px-5 text-center font-semibold'></td>
              </tr>

              {/* -------------------------Tution fee row--------------------------  */}
              <tr className='border-[0.5px] border-[#0D15304D]'>
                <td className='py-1 px-5 text-center font-semibold'>2</td>
                <td className='py-1 px-5 text-center font-semibold'>
                  Tution fee
                </td>
                <td className='py-1 px-5 text-center font-semibold'>
                  Jan - June
                </td>
                <td className='py-1 px-5 text-center font-semibold'>3000</td>
                <td className='py-1 px-5 text-center font-semibold'>3000</td>
              </tr>

              {/* ---------------------------Exam fee row--------------------------- */}
              <tr className='border-[0.5px] border-[#0D15304D]'>
                <td className='py-1 px-5 text-center font-semibold'>3</td>
                <td className='py-1 px-5 text-center font-semibold'>
                  Exam fee
                </td>
                <td className='py-1 px-5 text-center font-semibold'></td>
                <td className='py-1 px-5 text-center font-semibold'>500</td>
                <td className='py-1 px-5 text-center font-semibold'></td>
              </tr>

              {/* -------------------------Registration fee row--------------------- */}
              <tr className='border-[0.5px] border-[#0D15304D]'>
                <td className='py-1 px-5 text-center font-semibold'>3</td>
                <td className='py-1 px-5 text-center font-semibold'>
                  Registration fee
                </td>
                <td className='py-1 px-5 text-center font-semibold'></td>
                <td className='py-1 px-5 text-center font-semibold'>2000</td>
                <td className='py-1 px-5 text-center font-semibold'></td>
              </tr>

              {/* ------------------------Total fees row----------------------------- */}
              <tr>
                <td className='py-1 px-5 text-center font-semibold'></td>
                <td className='py-1 px-5 text-center font-semibold'></td>
                <td className='py-1 px-5 text-center font-semibold'>Total</td>
                <td className='py-1 px-5 text-center font-semibold'>6000</td>
                <td className='py-1 px-5 text-center font-semibold'></td>
              </tr>
            </tbody>
          </table>

          <div>
            <div className='flex justify-between items-center mt-40'>
              <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
                <span className='bg-gray-800 py-[0.5px] w-64'></span>
                Received By
              </h3>
              <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
                <span className='bg-gray-800 py-[0.5px] w-64'></span>
                Payment By
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-end items-end gap-3 mx-auto my-16'>
        <button className='bg-yellow text-white py-3 w-36 rounded'>
          Print
        </button>
        <button className='bg-primary text-white py-3 w-36 rounded'>
          Download
        </button>
      </div>
    </div>
  );
};

export default DetailPaymentSlip;
