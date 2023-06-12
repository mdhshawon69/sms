import React from "react";
import ClassScheduleForm from "../ClassScheduleForm/ClassScheduleForm";
import ClassScheduleTable from "./ClassScheduleTable/ClassScheduleTable";

const ClassSchedulePage = () => {
  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          Class Schedule
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
      <ClassScheduleForm />
      <ClassScheduleTable />
    </div>
  );
};

export default ClassSchedulePage;
