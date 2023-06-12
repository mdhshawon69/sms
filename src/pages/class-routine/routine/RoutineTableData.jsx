import { Pencil } from "../../../constants/icons";

const RoutineTableData = ({ data, setShowModal }) => {
  return (
    <tr className='text-center'>
      <td className='py-4 px-3 font-semibold text-xl border-[0.5px] border-gray-400'>
        {data?.day}
      </td>

      {data?.subject?.map((item, i) => (
        <td
          id={i}
          className='group py-4 px-3  border-[0.5px] border-gray-400 relative cursor-pointer'>
          <h3 className='text-lg font-semibold'>{item?.subjectName}</h3>
          <span>{item?.teacher}</span>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm py-[28px] px-[46px] absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg'
              onClick={() => setShowModal(true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>
      ))}
    </tr>
  );
};

export default RoutineTableData;
