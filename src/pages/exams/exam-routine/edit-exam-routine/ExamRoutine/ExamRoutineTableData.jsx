import React from "react";
import { Pencil } from "../../../../../constants/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import { idActions } from "../../../../../redux/store/slices/idSlice";

const ExamRoutineTableData = ({
  data,
  setShowDateModal,
  setShowTimeModal,
  setShowSubjectModal,
}) => {
  const startDate = moment(data.examDate).utc().format("DD/MM/YYYY");
  const day = moment(data.startDateTime).utc().format("dddd");
  const startTime = moment
    .utc(data.starTime)
    .utcOffset("+06")
    .format("hh:mm A");
  const endTime = moment.utc(data.endTime).utcOffset("+06").format("hh:mm A");
  const dispatch = useDispatch();

  const passDataDate = (id, boolean) => {
    setShowDateModal(boolean);
    dispatch(idActions.setId({ id: id }));
  };

  const passDataTime = (id, boolean) => {
    setShowTimeModal(boolean);
    dispatch(idActions.setId({ id: id }));
  };

  const passDataSubject = (id, boolean) => {
    setShowSubjectModal(boolean);
    dispatch(idActions.setId({ id: id }));
  };

  return (
    <tbody>
      <tr className='text-center'>
        <td className='py-4 px-4  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold w-32 mx-auto'>{startDate}</p>
          <span className='font-semibold'>{day}</span>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm h-full w-full absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[10%]'
              onClick={() => passDataDate(data._id, true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>

        <td className='py-3 px-3  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>
            {startTime} - {endTime}
          </p>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm h-full w-full absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[9%]'
              onClick={() => passDataTime(data._id, true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>

        <td className='py-4 px-4  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold w-32 mx-auto'>
            {data?.subject}
          </p>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm h-full w-full absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[10%]'
              onClick={() => passDataSubject(data._id, true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ExamRoutineTableData;
