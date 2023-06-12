import React from "react";
import { classRoutineTableData } from "../../../constants/tableData/classRoutineTableData";
import ClassRoutineTableData from "./ClassRoutineTableData";

const ClassRoutineTable = () => {
  return (
    <div className="w-full mx-auto mt-16">
      <table className="w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="py-4 px-2 text-white text-center">Class</th>
            <th className="py-4 px-2 text-white text-center">Section</th>
            <th className="py-4 px-2 text-white text-center">Session</th>
            <th className="py-4 px-2 text-white text-center" />
            <th className="py-4 px-2 text-white text-center" />
            <th className="py-4 px-2 text-white text-center">Action</th>
          </tr>
        </thead>

        <ClassRoutineTableData tableData={classRoutineTableData} />
      </table>
      <div className="flex justify-between items-center">
        <p className="font-semibold mt-5 text-sm">10 Result</p>
      </div>
    </div>
  );
};

export default ClassRoutineTable;
