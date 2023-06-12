import React from "react";
import { admitCardTableData } from "../../../../constants/tableData/tableData";
import AdmitCardTableData from "./AdmitCardTableData";

const AdmitCardTable = ({ setShowModal }) => {
  return (
    <div className="w-full mx-auto mt-16">
      <div className="flex justify-end items-end mb-6">
        <button
          className="py-2 px-8 rounded text-white bg-yellow"
          onClick={() => setShowModal(true)}
        >
          Print
        </button>
      </div>
      <table className="w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="py-4 px-2 text-white text-center">Class</th>
            <th className="py-4 px-2 text-white text-center">Exam Name</th>

            <th className="py-4 px-2 text-white text-center">Session</th>

            <th className="py-4 px-2 text-white text-center">Action</th>
          </tr>
        </thead>

        <AdmitCardTableData tableData={admitCardTableData} />
      </table>
      <div>
        <p className="font-semibold text-sm mt-5">10 Result</p>
      </div>
    </div>
  );
};

export default AdmitCardTable;
