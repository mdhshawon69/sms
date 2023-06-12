import React from "react";
import NoticeBoardTableData from "./NoticeBoardTableData";
import { Axios } from "../../../../core/axios";
import { useQuery } from "react-query";
import { useState } from "react";
import PaginationRounded from "../../../../components/PaginationRounded/PaginationRounded";

const NoticeBoardTable = ({ setShowModal }) => {
  const [pagination, setPagination] = useState(1);
  const getData = (pagination) => {
    return Axios.get(
      `/admin/notice?skip=${
        pagination === 1 ? 0 : 10 * pagination - 10
      }&limit=10`
    );
  };

  const { data, refetch } = useQuery(
    ["notice-list", pagination],
    () => getData(pagination),
    {
      refetchInterval: 1000,
    }
  );

  return (
    <div>
      {data?.data?.data?.length === 0 ? (
        <div className='py-32 text-center'>
          {" "}
          <p className='text-5xl font-semibold text-primary'>
            No Notice Found!
          </p>{" "}
        </div>
      ) : (
        <table className='w-full border border-gray-300'>
          <thead>
            <tr className='bg-primary'>
              <th className='py-4 px-2 text-white text-center'>File</th>
              <th className='py-4 px-2 text-white text-center'>Title</th>
              <th className='py-4 px-2 text-white text-center'>Date</th>
              <th className='py-4 px-2 text-white text-center'>Action</th>
            </tr>
          </thead>

          <NoticeBoardTableData
            setShowModal={setShowModal}
            tableData={data?.data?.data}
          />
        </table>
      )}
      <div className='flex justify-between items-center mt-6'>
        <p className='font-semibold text-sm'>
          {data?.data?.data?.length} Result
        </p>
        <PaginationRounded setPagination={setPagination} />
      </div>
    </div>
  );
};

export default NoticeBoardTable;
