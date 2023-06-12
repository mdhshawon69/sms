import React from "react";
import { promotedTableTada } from "../../../../../constants/tableData/promotionTableData";
import AllResultTableData from "./AllResultListTableData";

const AllResultListTable = () => {
  return (
    <div className="my-20">
      <table className="w-full border-[0.5px] border-gray-500 relative bg-white text-center">
        <thead>
          <tr className="text-lg">
            <th className="border-[0.5px] border-gray-500 p-3">Roll</th>
            <th className="border-[0.5px] border-gray-500 p-3">Name</th>
            <th className="border-[0.5px] border-gray-500 p-3">Status</th>
            <th className="border-[0.5px] border-gray-500 p-3">
              Promoted to Class
            </th>
          </tr>
        </thead>
        <tbody>
          {promotedTableTada.map((item, i) => (
            <AllResultTableData tableData={item} key={i} />
          ))}
        </tbody>
      </table>
      <p className="font-semibold my-5">20 Result</p>
    </div>
  );
};

export default AllResultListTable;
