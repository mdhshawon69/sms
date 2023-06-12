import React from "react";
import { useRouter } from "next/router";
import { Add, Delete, Eye } from "../../../../constants/icons";

const ClassScheduleTableData = ({ tableData }) => {
  const router = useRouter();

  const handlePushAdd = (e) => {
    e.preventDefault();

    router.push("/class-routine/set-class-routine");
  };

  const handlePushShow = (e) => {
    e.preventDefault();

    router.push("/class-routine/routine");
  };

  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.sn}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.date}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.class}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text' />
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text' />

          <td className='py-3 px-8 text-right'>
            <span className='space-x-2'>
              <button onClick={handlePushAdd}>
                <Add className='text-primary h-6 w-6 cursor-pointer' />
              </button>
              <button onClick={handlePushShow}>
                <Eye className='text-primary h-6 w-6 cursor-pointer' />
              </button>
              <button>
                <Delete className='text-[#FF0000B2] h-6 w-6 cursor-pointer' />
              </button>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClassScheduleTableData;
