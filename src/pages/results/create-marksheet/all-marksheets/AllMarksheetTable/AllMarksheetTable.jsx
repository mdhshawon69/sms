import React from "react";
import { resultTableData } from "../../../../../constants/tableData/resultTableData";
import AllMarksheetTableData from "./AllMarksheetTableData";

const AllMarksheetTable = () => {
  return (
    <div className='my-20'>
      <table className='w-full border-[0.5px] border-gray-500 relative bg-white text-center'>
        <thead>
          <tr className='text-lg'>
            <th className='border-[0.5px] border-gray-500 p-3'>Roll</th>
            <th className='border-[0.5px] border-gray-500 p-3'>Name</th>
            <th className='border-[0.5px] border-gray-500 p-3'>Position</th>
            <th className='border-[0.5px] border-gray-500 p-3'>Grade</th>
            <th className='border-[0.5px] border-gray-500 p-3'>GPA</th>
            <th className='border-[0.5px] border-gray-500 p-3'></th>
          </tr>
        </thead>
        <tbody>
          {resultTableData.map((item, i) => (
            <AllMarksheetTableData tableData={item} key={i} />
          ))}
        </tbody>
      </table>
      <p className='font-semibold my-5'>20 Result</p>
    </div>
  );
};

export default AllMarksheetTable;
