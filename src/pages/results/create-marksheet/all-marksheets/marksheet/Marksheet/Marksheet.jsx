import Image from "next/image";
import React from "react";
import images from "../../../../../../assets";
import MarksheetTableData from "./MarksheetTableData";

const Marksheet = ({ reportData }) => {
  return (
    <div className='w-full mx-auto'>
      <div className='w-full mx-auto pt-5 pb-1 px-10 text-primary-text bg-white relative'>
        <div className='absolute lg:top-1/4 lg:left-[265px] xl:left-[410px]'>
          <Image src={images.bigLogo} height={600} width={600} />
        </div>
        <div className='text-center space-y-2'>
          <Image src={images.sclLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Half- Yearly Examination - 2022
            <span className='bg-gray-400 py-[1px] w-[340px]'></span>
          </h3>
          <p>Academic Transcript</p>
        </div>

        <div className='w-full px-5 mx-auto my-14'>
          <div className='flex justify-between capitalize'>
            <div className='font-corsiva flex justify-between items-center capitalize '>
              <div className='space-y-5 font-semibold text-base'>
                <p>name</p>
                <p>father's name</p>
                <p>mother's name</p>
                <p>class</p>
                <p>roll</p>
                <p>registration</p>
              </div>
              <div className='mx-14 space-y-5'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='space-y-5 font-cursive font-bold text-md'>
                <p>{reportData?.name}</p>
                <p>{reportData?.father}</p>
                <p>{reportData?.mother}</p>
                <p>{reportData?.class}</p>
                <p>{reportData?.roll}</p>
                <p>{reportData?.registration}</p>
              </div>
            </div>
            <div className=' flex justify-between capitalize'>
              <div className='w-1/5 font-semibold text-base space-y-5'>
                <p>date</p>
                <p>position</p>
              </div>
              <div className='ml-28 mr-8 space-y-5'>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='font-cursive font-bold text-md space-y-5'>
                <p className='w-20'>{reportData?.date}</p>
                <p className='w-20'>{reportData?.position}</p>
              </div>
            </div>
          </div>
          <table className='w-full my-10 border-[0.5px] border-gray-500 relative'>
            <thead>
              <tr>
                <th className='border-[0.5px] border-gray-500' rowSpan={4}>
                  Subject Code
                </th>
                <th className='border-[0.5px] border-gray-500' rowSpan={4}>
                  Subjects
                </th>
                <th className='border-[0.5px] border-gray-500' colSpan={6}>
                  Marks
                </th>
                <th className='border-[0.5px] border-gray-500' rowSpan={4}>
                  GPA
                </th>
              </tr>

              <tr>
                <th className='border-[0.5px] border-gray-500' colSpan={2}>
                  MCQ
                </th>
                <th className='border-[0.5px] border-gray-500' colSpan={2}>
                  CQ
                </th>
                <th className='border-[0.5px] border-gray-500' colSpan={2}>
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping the table data with the ReportCardTableData component */}
              {reportData?.marks?.map((item) => (
                <MarksheetTableData reportData={item} />
              ))}

              <tr>
                <td className=' py-6' colSpan={5}></td>
                <td className='text-center font-bold text-md border-[0.5px] border-gray-500'>
                  Total of
                </td>
                <td
                  colSpan={2}
                  className='text-center font-bold text-md border-[0.5px] border-gray-500'>
                  {reportData?.totalOf}
                </td>
                <td className='text-center font-bold text-md absolute top-1/2 lg:right-[18px] xl:right-[28px]'>
                  {reportData?.gpa}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <div className='flex justify-between items-center mt-40'>
              <h3 className='text-semibold text-lg flex flex-col justify-center items-start gap-1'>
                <span className='bg-gray-800 py-[0.5px] w-64'></span>
                Controller of Examination
              </h3>
              <h3 className='text-semibold text-lg flex flex-col justify-center items-start gap-1'>
                <span className='bg-gray-800 py-[0.5px] w-64'></span>
                Principle Signature
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-end items-end gap-3 w-full mx-auto my-16'>
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

export default Marksheet;
