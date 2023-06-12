import React from "react";
import noticeData from "../../constants/tableData/noticeData";

const DashboardTable = () => {
  return (
    <div className='w-3/5 bg-white shadow-md rounded-md'>
      <div className='flex justify-between items-center w-full py-4 px-6'>
        <h4 className='font-semibold'>Notice Board</h4>
        <select className='border border-gray-400 p-1 rounded'>
          <option className='border border-gray-400 p-1 rounded' value=''>
            Recent
          </option>
          <option className='border border-gray-400 p-1 rounded' value=''>
            Last Week
          </option>
        </select>
      </div>
      <table className='w-full font-semibold font-kalpurush'>
        <tbody>
          {noticeData.map((item, i) => (
            <tr>
              <td className='border-y-[0.5px] border-r-[0.5px] border-gray-300 py-4 px-6'>
                {item.title}
              </td>
              <td className='border-y-[0.5px] border-gray-300 py-4 px-2 text-center'>
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
