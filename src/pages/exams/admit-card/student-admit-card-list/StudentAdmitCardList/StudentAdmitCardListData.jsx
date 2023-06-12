import { useRouter } from "next/router";
import React from "react";
import { Eye } from "../../../../../constants/icons";

const StudentAdmitCardListData = ({ data }) => {
  const router = useRouter();

  const handlePushShow = (e) => {
    e.preventDefault();

    router.push("/exams/admit-card/student-admit-card-list/student-admit-card");
  };

  return (
    <tr className='text-center font-semibold'>
      <td className='py-2 px-2 border-[0.5px] border-[#0D153080]'>
        {data?.roll}
      </td>
      <td className='py-2 px-2 border-[0.5px] border-[#0D153080]'>
        {data?.name}
      </td>
      <td className='py-2 px-2 border-[0.5px] border-[#0D153080]'>
        {data?.exam}
      </td>
      <td className='py-2 px-2 border-[0.5px] border-[#0D153080]'>
        {data?.session}
      </td>
      <td className='py-2 px-2 border-[0.5px] border-[#0D153080]'>
        <button className='text-primary mt-1' onClick={handlePushShow}>
          <Eye className='h-5 w-5' />
        </button>
      </td>
    </tr>
  );
};

export default StudentAdmitCardListData;
