import React from "react";
import { accessTableData } from "../../../../constants/tableData/accessTableData";
import AccessTableData from "./AccessTableData";

const AccessTable = () => {
  return (
    <div className='w-full mx-auto mt-16'>
      <p className='font-semibold mb-5 text-sm'>10 Result</p>
      <table className='w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden'>
        <thead>
          <tr className='bg-primary'>
            <th className='py-4 px-2 text-white text-center'>Operator</th>
            <th className='py-4 px-2 text-white text-center'>Designation</th>
            <th className='py-4 px-2 text-white text-center'>Contact</th>
            <th className='py-4 px-2 text-white text-center'>Access</th>
          </tr>
        </thead>

        <AccessTableData tableData={accessTableData} />
      </table>
    </div>
  );
};

export default AccessTable;
