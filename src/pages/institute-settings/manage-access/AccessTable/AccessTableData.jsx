import Image from "next/image";
import React from "react";
import images from "../../../../assets";
import AccessTableSelector from "./AccessTableSelector";

const AccessTableData = ({ tableData }) => {
  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text flex justify-center items-center gap-5'>
            <Image src={images.accessImage} />
            {item.operator}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.designation}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.contact}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            <AccessTableSelector />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AccessTableData;
