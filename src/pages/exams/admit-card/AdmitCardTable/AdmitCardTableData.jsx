import React from "react";
import { useRouter } from "next/router";

const AdmitCardTableData = ({ tableData }) => {
  const router = useRouter();

  const handlePushShow = e => {
    e.preventDefault();

    router.push("/exams/admit-card/student-admit-card-list");
  };

  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item.class}
          </td>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item.exam}
          </td>
          <td className="py-4 px-2 text-center text-sm font-semibold text-primary-text">
            {item.session}
          </td>
          <td className="py-3 px-2 text-center">
            <button
              className="w-1/2 py-2 rounded bg-primary text-white"
              onClick={handlePushShow}
            >
              See All
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AdmitCardTableData;
