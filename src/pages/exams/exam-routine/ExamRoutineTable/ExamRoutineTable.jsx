import React from "react";
import PaginationRounded from "../../../../components/PaginationRounded/PaginationRounded";
import ExamRoutineTableData from "./ExamRoutineTableData";

const ExamRoutineTable = ({ examData, setPagination, refetch }) => {
  return (
    <div className='w-full mx-auto mt-16'>
      <table className='w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden'>
        <thead>
          <tr className='bg-primary'>
            <th className='py-4 px-20 text-white text-left'>Exam Name</th>
            <th className='py-4 px-10 text-white text-center'>Exam Year</th>

            <th className='py-4 px-10 text-white text-center'>Class</th>

            <th className='py-4 px-10 text-white text-center'>Action</th>
          </tr>
        </thead>

        <ExamRoutineTableData examData={examData} refetch={refetch} />
      </table>
      <div className='flex justify-between items-center mt-5'>
        <p className='font-semibold text-sm'>{examData?.length} Result</p>
        <PaginationRounded setPagination={setPagination} />
      </div>
    </div>
  );
};

export default ExamRoutineTable;
