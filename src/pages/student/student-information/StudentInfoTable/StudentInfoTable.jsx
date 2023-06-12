import React, { useState } from "react";
import { useQuery } from "react-query";
import PaginationRounded from "../../../../components/PaginationRounded/PaginationRounded";
import { Axios } from "../../../../core/axios";
import StudentInfoTableData from "./StudentInfoTableData";

const StudentInfoTable = ({ setShowModal, setEditModal }) => {
  const [pagination, setPagination] = useState(1);

  const getData = (pagination) => {
    return Axios.get(
      `/admin/student?skip=${
        pagination === 1 ? 0 : 10 * pagination - 10
      }&limit=10`
    );
  };

  const { isFetching, data, refetch } = useQuery(
    ["student-list", pagination],
    () => getData(pagination),
    {
      keepPreviousData: "true",
    }
  );

  //Sorting function for sorting the students by their roll number.
  function compare(a, b) {
    if (a.roll < b.roll) {
      return -1;
    }
    if (a.roll > b.roll) {
      return 1;
    }
    return 0;
  }

  data?.data?.data?.studentList?.sort(compare);

  return (
    <div className='w-full mx-auto mt-16'>
      <div className='flex justify-end items-end my-6 '>
        <button
          className='py-2 px-6 bg-primary rounded text-white'
          onClick={() => setShowModal(true)}>
          Add New Student
        </button>
      </div>
      <table className='w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden'>
        <thead>
          <tr className='bg-primary'>
            <th className='py-4 px-2 text-white text-center'>Name</th>
            <th className='py-4 px-2 text-white text-center'>Roll</th>
            <th className='py-4 px-2 text-white text-center'>Parent Name</th>
            <th className='py-4 px-2 text-white text-center'>Location</th>
            <th className='py-4 px-2 text-white text-center'>Contact</th>
            <th className='py-4 px-2 text-white text-center' />
          </tr>
        </thead>

        <StudentInfoTableData
          tableData={data?.data?.data?.studentList}
          setEditModal={setEditModal}
        />
      </table>
      <div className='flex justify-between items-center mt-6'>
        <p className='font-semibold text-sm'>
          {data?.data?.data?.studentList?.length} Result
        </p>
        <PaginationRounded setPagination={setPagination} />
      </div>
    </div>
  );
};

export default StudentInfoTable;
