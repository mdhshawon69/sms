import React from "react";
import { Add } from "../../../constants/icons";
import { classRoutineData } from "../../../constants/routineData";

const SetClassRoutineTableData = ({ day, setShowModal }) => {
  return (
    <tr className='text-center'>
      <td className='py-4 px-3 font-semibold text-lg border-[0.5px] border-gray-400'>
        {day}
      </td>

      {classRoutineData?.map((item, i) => (
        <td className='py-4 px-3 border-[0.5px] border-gray-400' key={i}>
          <button onClick={() => setShowModal(true)}>
            <Add className='text-3xl cursor-pointer' />
          </button>
        </td>
      ))}
    </tr>
  );
};

export default SetClassRoutineTableData;
