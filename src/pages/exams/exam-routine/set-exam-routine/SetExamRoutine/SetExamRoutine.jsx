import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import images from "../../../../../assets";
import SetExamRoutineSelector from "./SetExamRoutineSelector";
import { Axios } from "../../../../../core/axios";
import swal from "sweetalert";
import moment from "moment/moment";

const SetExamRoutine = ({ id }) => {
  const [subject, setSubject] = useState("");
  const dateRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();

  const createExam = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios({
        method: "post",
        url: `/admin/exam-routine/${id}/exam`,
        data: {
          examDate: dateRef.current.value,
          startTime: "10/20/1971" + "," + startTimeRef.current.value,
          endTime: "10/20/1971" + "," + endTimeRef.current.value,
          subject: subject,
        },
      });

      swal(data.message, <h2>Exam Created Successfully</h2>, "success");
    } catch (error) {
      const err = error.response.data.errors[0].msg;
      swal(err, "An Error Occured", "error");
    }
  };
  return (
    <div>
      <div className='w-9/12 mx-auto mb-10 py-10 px-10 bg-white text-primary-text relative border border-gray-300'>
        <div className='text-center space-y-2'>
          <Image src={images.sclLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Exam Routine - 2022
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
          <p>Class - {}</p>
        </div>

        <form className='px-8 py-8' onSubmit={createExam}>
          <div className='flex justify-center items-center gap-10'>
            <div className='flex flex-col justify-start font-semibold items-start gap-[38px]'>
              <label htmlFor=''>Exam Date</label>
              <label htmlFor=''>Start Time</label>
              <label htmlFor=''>End Time</label>
              <label htmlFor=''>Subject</label>
            </div>

            <div className='flex flex-col justify-center items-center gap-[38px] font-semibold'>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
              <input
                type='date'
                className='w-96 border border-gray-400 outline-none rounded p-1.5'
                ref={dateRef}
              />
              <input
                type='time'
                className='w-96 border border-gray-400 outline-none rounded p-1.5'
                ref={startTimeRef}
              />
              <input
                type='time'
                className='w-96 border border-gray-400 outline-none rounded p-1.5'
                ref={endTimeRef}
              />
              <SetExamRoutineSelector setSubject={setSubject} />
            </div>
          </div>

          <div className='text-right mt-5 w-4/5 mx-auto px-5'>
            <button
              type='submit'
              className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetExamRoutine;
