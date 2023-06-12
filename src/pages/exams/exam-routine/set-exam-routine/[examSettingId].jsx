import React, { useState } from "react";
import SetExamRoutine from "./SetExamRoutine/SetExamRoutine";
import { Backdrop } from "../../../../components";
import { useRouter } from "next/router";

const SetExamRoutinePage = () => {
  const router = useRouter();
  const id = router.query.examSettingId;

  return (
    <div>
      <div className='mt-16 mb-24'>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Exam Routine
        </h2>
        <div className='mb-10'>
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

      <SetExamRoutine id={id} />
    </div>
  );
};

export default SetExamRoutinePage;
