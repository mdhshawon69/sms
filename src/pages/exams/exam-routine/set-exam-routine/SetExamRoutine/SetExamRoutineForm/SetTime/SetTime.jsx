import moment from "moment/moment";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Cross } from "../../../../../../../constants/icons";
import swal from "sweetalert";
import { Axios } from "../../../../../../../core/axios";

const SetTime = ({ setShowTimeModal, examId, refetch }) => {
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const id = useSelector((state) => state.id.id);

  const editTime = async (e) => {
    e.preventDefault();
    const startTime = startTimeRef.current.value;
    const endTime = endTimeRef.current.value;

    try {
      const { data } = await Axios({
        method: "patch",
        url: `/admin/exam-routine/${examId}/exam`,
        data: {
          _id: id,
          startTime: "10/20/1971" + "," + startTime,
          endTime: "10/20/1971" + "," + endTime,
        },
      });
      refetch();
      swal(data.message, "Time Edited Successfully", "success");
      console.log(data);
    } catch (error) {
      const err = error.response.data.errors[0].msg;
      swal(err, "An Error Occured", "error");
      console.log(error);
    }
  };

  console.log(id);

  return (
    <div className='w-[450px] h-[310px] bg-white rounded relative'>
      <button onClick={() => setShowTimeModal(false)}>
        <Cross className='absolute top-3 right-3 text-[#7B7B7B]' />
      </button>
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          Set Time
        </h2>
        <div className='mb-7'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
            <span className='w-[250px] py-[1px] bg-primary' />
            <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
            <span className='w-[150px] py-[1px] bg-primary' />
            <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
          </div>
        </div>
      </div>

      <form className='px-5' onSubmit={editTime}>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex flex-col justify-start items-start gap-[31px]'>
            <p htmlFor=''>Start Time</p>
            <p htmlFor=''>End Time</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-[31px]'>
            <p>:</p>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <input
              type='time'
              className='py-1 px-2 border border-gray-400 rounded outline-none uppercase w-60'
              ref={startTimeRef}
            />

            <input
              type='time'
              className='py-1 px-2 border border-gray-400 rounded outline-none uppercase w-60'
              ref={endTimeRef}
            />
          </div>
        </div>
        <div className='text-right mt-5'>
          <button
            type='submit'
            className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold inline-block mr-[2%]'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetTime;
