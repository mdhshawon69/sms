import { useRouter } from "next/router";
import React from "react";
import { Eye } from "../../../../../constants/icons";

const AllMarksheetTableData = ({ tableData }) => {
  const router = useRouter();

  const handlePushShow = (e) => {
    e.preventDefault();

    router.push("/results/create-marksheet/all-marksheets/marksheet");
  };

  return (
    <tr className='font-semibold'>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.roll}</td>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.name}</td>
      <td className='border-[0.5px] border-gray-500 p-3'>
        {tableData?.position}
      </td>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.grade}</td>
      <td className='border-[0.5px] border-gray-500 p-3'>{tableData?.gpa}</td>

      <td className='border-[0.5px] border-gray-500 p-3'>
        <button onClick={handlePushShow}>
          <Eye className='text-primary h-5 w-5 cursor-pointer' />
        </button>
      </td>
    </tr>
  );
};

export default AllMarksheetTableData;
