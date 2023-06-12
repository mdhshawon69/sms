import React from "react";

const MarksheetTableData = ({ reportData }) => {
  return (
    <tr className='text-center'>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.subjectCode}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.subject}
      </td>
      <td colSpan={2} className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.mcq}
      </td>
      <td colSpan={2} className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.cq}
      </td>
      <td colSpan={2} className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.total}
      </td>
    </tr>
  );
};

export default MarksheetTableData;
