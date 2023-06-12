import React from "react";
import { admitCardListData } from "../../../../../constants/tableData/tableData";
import StudentAdmitCardListData from "./StudentAdmitCardListData";

const StudentAdmitCardList = () => {
  return (
    <div className='w-full mt-20'>
      <table className='w-full border-[0.5px] border-[#0D153080] bg-white'>
        <thead>
          <tr className='text-lg'>
            <th className='py-6 px-2 border-[0.5px] border-[#0D153080]'>
              Roll
            </th>
            <th className='py-6 px-2 border-[0.5px] border-[#0D153080]'>
              Name
            </th>
            <th className='py-6 px-2 border-[0.5px] border-[#0D153080]'>
              Exam Name
            </th>
            <th className='py-6 px-2 border-[0.5px] border-[#0D153080]'>
              Session
            </th>
            <th className='py-6 px-2 border-[0.5px] border-[#0D153080]'></th>
          </tr>
        </thead>
        <tbody>
          {admitCardListData.map((item) => (
            <StudentAdmitCardListData data={item} key={item.roll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentAdmitCardList;
