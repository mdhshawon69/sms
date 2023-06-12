import React from "react";

const AllResultTableData = ({ tableData }) => {
  return (
    <tr className='font-semibold'>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.roll}</td>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.name}</td>
      <td className='border-[0.5px] border-gray-500 p-3'>
        {tableData?.position}
      </td>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.grade}</td>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.gpa}</td>
    </tr>
  );
};

export default AllResultTableData;
