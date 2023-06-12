import React from "react";

const ApplicationFormTable = ({ tableData }) => {
  return (
    <table className='w-full mx-auto my-12'>
      <thead>
        <tr>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Exam
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Roll
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Board
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Year
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Institute Name
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            GPA
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            JSC/Equlv.
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            {tableData?.jscRoll}
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            {tableData?.board}
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            {tableData?.passingYear}
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            {tableData?.institutionName}
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            {tableData?.gpa}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ApplicationFormTable;
