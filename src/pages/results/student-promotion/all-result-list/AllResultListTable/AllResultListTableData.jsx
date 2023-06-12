import React from "react";

const AllResultTableData = ({ tableData }) => {
  return (
    <tr className='font-semibold'>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.roll}</td>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.name}</td>
      <td className='border-[0.5px] border-gray-500 p-3'>
        {tableData?.status}
      </td>
      <td className='border-[0.5px] border-gray-500 p-3'>
        {tableData?.promoted}
      </td>
    </tr>
  );
};

export default AllResultTableData;
