import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Cross } from "../../../../constants/icons";
import { Axios } from "../../../../core/axios";
import StudentInfoEditFormColons from "./StudentInfoEditFormColons";
import StudentInfoEditFormInputs from "./StudentInfoEditFormInputs";
import StudentInfoEditFormLables from "./StudentInfoEditFormLables";

const StudentInfoEditForm = ({ setShowModal, title }) => {
  const studentId = useSelector((state) => state.id.studentId);
  const getData = (studentId) => {
    return Axios.get(`/admin/student/${studentId}`);
  };

  const { data } = useQuery(["individual-student", studentId], () =>
    getData(studentId)
  );
  return (
    <div>
      <div className='w-[1000px] rounded-lg mx-auto py-10 px-10 bg-white text-primary-text relative'>
        <button onClick={() => setShowModal(false)}>
          <Cross className='w-6 h-6 absolute top-4 right-4 cursor-pointer' />
        </button>
        <div>
          <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
            {title}
          </h2>
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
              <span className='w-[450px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
              <span className='w-[350px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
            </div>
          </div>
        </div>

        {/* Admission from inputs */}

        <div className='flex justify-between items-center xl:w-4/5 lg:w-11/12 mx-auto mt-16 pb-20'>
          <StudentInfoEditFormLables />
          <StudentInfoEditFormColons />
          <StudentInfoEditFormInputs studentData={data?.data?.data} />
        </div>
      </div>
    </div>
  );
};

export default StudentInfoEditForm;
