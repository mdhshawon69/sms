import TableData from "./TableData";
import PaginationRounded from "../PaginationRounded/PaginationRounded";

const AdmissionTable = ({ tableData, setPagination }) => {
  return (
    <div className='mt-16'>
      <table className=' w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden'>
        <thead>
          <tr className='bg-primary'>
            <th className='py-4 px-2 text-white text-center'>Name</th>
            <th className='py-4 px-2 text-white text-center'>Application ID</th>
            <th className='py-4 px-2 text-white text-center'>Class</th>
            <th className='py-4 px-2 text-white text-center'>Contact </th>
            <th className='py-4 px-2 text-white text-center'>Session</th>
            <th className='py-4 px-2 text-white text-center'>Method</th>
            <th className='py-4 px-2 text-white text-center'>Payment</th>
            <th className='py-4 px-2 text-white text-center' />
          </tr>
        </thead>

        <TableData tableData={tableData} />
      </table>
      <div className='flex justify-between items-center mt-6'>
        <p className='font-semibold text-sm'>{tableData?.length} Result</p>
        <PaginationRounded setPagination={setPagination} />
      </div>
    </div>
  );
};

export default AdmissionTable;
