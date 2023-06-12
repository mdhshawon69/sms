import React from "react";
import tableData from "../../constants/tableData";

// <---------------The parent component is index.jsx/Home + notice.jsx/Notice---------------------->

const Table = () => {
  return (
    <div className='w-4/5 mx-auto space-y-5 py-8'>
      <div className='mb-12'>
        <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
          Latest Notice
        </h2>
        <div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
            <span className='w-72 py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
            <span className='w-52 py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
          </div>
        </div>
      </div>
      <table className='border-collapse bg-white lg:w-4/5 xl:w-3/5 mx-auto'>
        {/* Mapping through the data.js file to generate table data */}

        {tableData.map((item, i) => (
          <tbody key={i}>
            <tr>
              <td className='px-6 py-4 border-[0.5px] border-gray-400 text-left font-bangla'>
                {item.title}
              </td>
              <td className='px-6 py-4 border-[0.5px] border-gray-400 text-primary-color text-center font-bangla'>
                {item.date}
              </td>
              <td className='px-6 py-4 border-[0.5px] border-gray-400 text-center'>
                <button className='px-6 py-1.5 bg-primary text-white outline-none border-none rounded'>
                  {item.link}
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
