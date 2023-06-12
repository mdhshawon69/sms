import React from "react";
import { promotionTableData } from "../../../../constants/tableData/promotionTableData";
import StudentPromotionTableData from "./StudentPromotionTableData";

const StudentPromotionTable = ({ setShowModal }) => {
  return (
    <div className="w-full mx-auto mt-16">
      <table className="w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="py-4 px-2 text-white text-center">Class</th>

            <th className="py-4 px-2 text-white text-center">Exam Name</th>

            <th className="py-4 px-2 text-white text-center">Session</th>

            <th className="py-4 px-2 text-white text-center">Status</th>

            <th className="py-4 px-2 text-white text-center">Action</th>
          </tr>
        </thead>

        <StudentPromotionTableData tableData={promotionTableData} />
      </table>
      <div className="flex justify-between items-center mt-6">
        <p className="font-semibold text-sm">10 Result</p>
      </div>
    </div>
  );
};

export default StudentPromotionTable;
