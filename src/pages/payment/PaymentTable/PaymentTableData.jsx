import React from "react";
import { Eye } from "../../../constants/icons";
import { useRouter } from "next/router";

const PaymentTableData = ({ tableData }) => {
  const router = useRouter();

  const handlePush = e => {
    e.preventDefault();

    router.push("/payment/payment-details");
  };

  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item?.name}
          </td>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item?.applicationId}
          </td>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item?.class}
          </td>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item?.contact}
          </td>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item?.session}
          </td>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item?.method}
          </td>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            <span
              className={`py-3 w-20 mx-auto block text-xs font-semibold rounded text-white ${
                item?.payment === "PAID" ? "bg-primary" : "bg-yellow"
              }`}
            >
              {item?.payment}
            </span>
          </td>
          <td className="py-3 px-2 text-center cursor-pointer">
            <button onClick={handlePush}>
              <Eye className="text-primary h-5 w-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PaymentTableData;
