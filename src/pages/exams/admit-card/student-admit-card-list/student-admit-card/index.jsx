import React from "react";
import StudentAdmitCard from "./StudentAdmitCard";

const StudentAdmitCardPage = () => {
  return (
    <div>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Admit Card (Class - 1)
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[500px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[400px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      <StudentAdmitCard />
    </div>
  );
};

export default StudentAdmitCardPage;
