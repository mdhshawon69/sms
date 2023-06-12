import moment from "moment/moment";
import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { Cross } from "../../../../../../../constants/icons";
import { Axios } from "../../../../../../../core/axios";

const SetDateAndDay = ({ setShowDateModal, examId, refetch }) => {
  const id = useSelector((state) => state.id.id);
  const dateRef = useRef();

  const editDate = async (e) => {
    e.preventDefault();
    const date = moment(dateRef.current.value).format("MM/DD/YYYY");
    try {
      const { data } = await Axios({
        method: "patch",
        url: `/admin/exam-routine/${examId}/exam`,
        data: {
          _id: id,
          examDate: date,
        },
      });
      refetch();
      swal(data.message, "Date Edited Successfully", "success");
    } catch (error) {
      const err = error.response.data.errors[0].msg;
      swal(err, "An Error Occured", "error");
    }
  };

  return (
    <div className='w-[450px] h-[310px] bg-white rounded relative'>
      <button onClick={() => setShowDateModal(false)}>
        <Cross className='absolute top-3 right-3 text-[#7B7B7B]' />
      </button>
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          Set Date & Day
        </h2>
        <div className='mb-7'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
            <span className='w-[300px] py-[1px] bg-primary' />
            <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
            <span className='w-[200px] py-[1px] bg-primary' />
            <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
          </div>
        </div>
      </div>

      {/* Set table form */}
      <form className='px-10' onSubmit={editDate}>
        <div className='flex justify-center items-center gap-8 w-full'>
          <div className='flex flex-col justify-start items-start gap-[31px]'>
            <p htmlFor=''>Date</p>
            <p htmlFor=''>Day</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-[31px]'>
            <p>:</p>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center w-full gap-5'>
            <input
              type='date'
              name='date-picker'
              id='exam-date-picker'
              className='py-1 px-2 border border-gray-400 rounded outline-none w-full'
              ref={dateRef}
            />
            <input
              type='text'
              className='py-1 px-2 border border-gray-400 rounded outline-none w-full'
            />
          </div>
        </div>
        <div className='text-right mt-5'>
          <button
            type='submit'
            className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetDateAndDay;
