import React from "react";

const DashboardRoutineTableData = ({ day, subject }) => {
  return (
    <tbody>
      <tr className='text-center'>
        <td className='px-5 py-5 font-semibold text-sm border-[0.5px] border-gray-400 text-primary'>
          {day}
        </td>

        {subject?.map((item, i) => (
          <td className='border-[0.5px] border-gray-400 py-4 text-gray-500'>
            <h3 className='text-xs font-semibold'>{item}</h3>
          </td>
        ))}
      </tr>
    </tbody>
  );
};

export default DashboardRoutineTableData;
