import React from "react";
import { classScheduleData } from "../../../../constants/tableData/classScheduleData";
import ClassScheduleTableData from "./ClassScheduleTableData";

const ClassScheduleTable = () => {
  return (
    <div className='w-full mx-auto mt-16'>
      <table className='w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden'>
        <thead>
          <tr className='bg-primary'>
            <th className='py-4 px-2 text-white text-center'>SN</th>
            <th className='py-4 px-2 text-white text-center'>Date</th>
            <th className='py-4 px-2 text-white text-center'>Class</th>
            <th className='py-4 px-2 text-white text-center' />
            <th className='py-4 px-2 text-white text-center' />
            <th className='py-4 px-2 text-white text-center' />
          </tr>
        </thead>
        <ClassScheduleTableData tableData={classScheduleData} />
      </table>
      <div className='flex justify-between items-center'>
        <p className='font-semibold mt-5 text-sm'>10 Result</p>
      </div>
    </div>
  );
};

export default ClassScheduleTable;
