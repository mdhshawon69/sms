import React from "react";
import { admitCardTableData } from "../../../../constants/tableData/tableData";
import MarkDistributionTableData from "./MarkDistributionTableData";

const MarkDistributionTable = ({ setShowModal }) => {
  return (
    <div className="w-full mx-auto mt-16">
      <table className="w-full ring-[0.3px] ring-[#5E5E5E] bg-white">
        <thead>
          <tr className="bg-primary">
            <th className="py-4 px-2 text-white text-center">Class</th>
            <th className="py-4 px-2 text-white text-center">Exam Name</th>

            <th className="py-4 px-2 text-white text-center">Session</th>

            <th className="py-4 px-2 text-white text-center">Action</th>
          </tr>
        </thead>

        <MarkDistributionTableData tableData={admitCardTableData} />
      </table>
      <p className="font-semibold text-sm mt-6">10 Result</p>
    </div>
  );
};

export default MarkDistributionTable;
