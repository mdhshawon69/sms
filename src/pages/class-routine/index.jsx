import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Backdrop } from "../../components";
import { Add } from "../../constants/icons";
import ClassRoutineSearchForm from "./ClassRoutineSearchForm/ClassRoutineSearchForm";
import ClassRoutineTable from "./ClassRoutineTable/ClassRoutineTable";
import ClassScheduleForm from "./ClassScheduleForm/ClassScheduleForm";
import CreateClassRoutineForm from "./CreateClassRoutineForm/CreateClassRoutineForm";

const ClassRoutinePage = () => {
  const [showScheduleModal, setshowScheduleModal] = useState(false);
  const [showCreateModal, setshowCreateModal] = useState(false);
  const router = useRouter();

  const handlePush = () => {
    router.push("/class-routine/class-schedule");
  };

  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Class Routine
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[300px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[200px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center gap-5 mb-16'>
        <button
          className='py-3 px-4 rounded bg-primary text-white text-sm font-semibold'
          onClick={handlePush}>
          Class Schedule
        </button>
        <button
          className='py-3 px-5 rounded bg-primary text-white text-sm font-semibold flex justify-center items-center gap-2'
          onClick={() => setshowCreateModal(true)}>
          <Add className='w-5 h-5' />
          Create Class Routine
        </button>
      </div>

      <ClassRoutineSearchForm />
      <ClassRoutineTable />

      {showScheduleModal && (
        <Backdrop setShowModal={setshowScheduleModal}>
          <ClassScheduleForm setShowModal={setshowScheduleModal} />
        </Backdrop>
      )}

      {showCreateModal && (
        <Backdrop setShowModal={setshowCreateModal}>
          <CreateClassRoutineForm setShowModal={setshowCreateModal} />
        </Backdrop>
      )}
    </div>
  );
};

export default ClassRoutinePage;
