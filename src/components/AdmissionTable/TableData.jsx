import React from "react";
import { Eye } from "../../constants/icons";
import { useRouter } from "next/router";

const TableData = ({ tableData }) => {
  const router = useRouter();

  const handlePush = (id) => {
    if (router.asPath === "/admission/new-admission") {
      router.push(`/admission/new-admission/application-form/${id}`);
    } else if (router.asPath === "/admission/admission-payment") {
      router.push("/admission/admission-payment/admission-payment-details");
    }
  };

  console.log(tableData);

  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-2.5 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.applicantsName}
          </td>
          <td className='py-2.5 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.applicantsId}
          </td>
          <td className='py-2.5 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.applicantsClass}
          </td>
          <td className='py-2.5 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.phone}
          </td>
          <td className='py-2.5 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.passingYear}
          </td>
          <td className='py-2.5 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.payment.method}
          </td>
          <td className='py-2.5 px-2 text-center text-sm font-semibold text-primary-text'>
            <span
              className={`py-3 w-20 mx-auto block text-xs font-semibold rounded text-white ${
                item.payment.status === "paid" ? "bg-primary" : "bg-yellow"
              }`}>
              {item?.payment?.status?.toUpperCase()}
            </span>
          </td>
          <td className='py-3 px-2 text-center cursor-pointer'>
            <button onClick={() => handlePush(item._id)}>
              <Eye className='text-primary h-5 w-5' />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
