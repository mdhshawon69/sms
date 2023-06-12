import React from "react";
import { tableData } from "../../../constants/tableData/tableData";
import PaymentTableData from "./PaymentTableData";

const PaymentTable = () => {
  return (
    <div className="mt-16">
      <table className=" w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="py-4 px-2 text-white text-center">Name</th>
            <th className="py-4 px-2 text-white text-center">Application ID</th>
            <th className="py-4 px-2 text-white text-center">Class</th>
            <th className="py-4 px-2 text-white text-center">Contact </th>
            <th className="py-4 px-2 text-white text-center">Session</th>
            <th className="py-4 px-2 text-white text-center">Method</th>
            <th className="py-4 px-2 text-white text-center">Payment</th>
            <th className="py-4 px-2 text-white text-center" />
          </tr>
        </thead>

        <PaymentTableData tableData={tableData} />
      </table>
      <p className="font-semibold text-sm mt-6">10 Result</p>
    </div>
  );
};

export default PaymentTable;
