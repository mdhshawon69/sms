import React from "react";
import { marksData } from "../../../../../constants/tableData/tableData";
import MarkSheetListTableData from "./MarkSheetListTableData";
const MarkSheetListTable = () => {
  return (
    <div className='my-20'>
      <p className='font-semibold my-5'>20 Result</p>

      <table className='w-full border-[0.5px] border-gray-500 relative bg-white'>
        <thead>
          <tr>
            <th className='border-[0.5px] border-gray-500' rowSpan={4}>
              Roll
            </th>
            <th className='border-[0.5px] border-gray-500' rowSpan={4}>
              Name
            </th>
            <th className='border-[0.5px] border-gray-500' rowSpan={4}>
              Subjects
            </th>
            <th className='border-[0.5px] border-gray-500' colSpan={6}>
              Marks
            </th>
            <th className='border-[0.5px] border-gray-500' rowSpan={4}>
              Grade
            </th>
            <th className='border-[0.5px] border-gray-500' rowSpan={4}></th>
          </tr>

          <tr>
            <th className='w-40 border-[0.5px] border-gray-500' colSpan={1}>
              MCQ
            </th>
            <th className='w-40 border-[0.5px] border-gray-500' colSpan={1}>
              CQ
            </th>
            <th className='w-40 border-[0.5px] border-gray-500' colSpan={1}>
              Practical
            </th>
            <th className='w-40 border-[0.5px] border-gray-500' colSpan={1}>
              Total
            </th>
          </tr>
        </thead>
        {/* Mapping the table data with the ReportCardTableData component */}
        {marksData?.map((item) => (
          <MarkSheetListTableData reportData={item} />
        ))}
      </table>
    </div>
  );
};

export default MarkSheetListTable;
