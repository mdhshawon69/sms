import React from "react";
import { useState } from "react";
import { Edit, ThreeDots } from "../../../../../constants/icons";

const MarkSheetListTableData = ({ reportData }) => {
  return (
    <tr className='text-center'>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.roll}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.name}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.subject}
      </td>
      <td className='border-[0.5px] border-gray-500 group'>
        <input type='text' className='w-full py-4 text-center outline-none' />
      </td>
      <td className='border-[0.5px] border-gray-500 group'>
        <input type='text' className='w-full py-4 text-center outline-none' />
      </td>
      <td className='border-[0.5px] border-gray-500'>
        <input type='text' className='w-full py-4 text-center outline-none' />
      </td>
      <td colSpan={3} className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.total}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.grade}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        <button className='px-2'>
          <ThreeDots />
        </button>
      </td>
    </tr>
  );
};

export default MarkSheetListTableData;
