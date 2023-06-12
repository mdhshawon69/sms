import Image from "next/image";
import React, { useState } from "react";
import images from "../../../assets";
import { Backdrop } from "../../../components";
import { classRoutineData } from "../../../constants/routineData";
import EditRoutineForm from "./EditRoutine/EditRoutineForm";
import RoutineTableData from "./RoutineTableData";

const ClassRoutine = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className='w-11/12 mx-auto py-10 px-10 text-primary-text bg-white'>
        <div className='text-center space-y-2'>
          <Image src={images.sclLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Class Routine - 2022
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
          <p>Class -</p>
        </div>

        <table className='w-full my-10 z-1'>
          <thead>
            <tr>
              <th className='text-xl border-[0.5px] border-gray-400 py-2 px-10'>
                Day
              </th>
              {classRoutineData?.map((item, i) => (
                <th
                  className='border-[0.5px] text-sm border-gray-400 py-2 px-3'
                  key={i}>
                  {item.time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {classRoutineData?.map((item, i) => (
              <RoutineTableData
                data={item}
                key={i}
                setShowModal={setShowModal}
              />
            ))}
          </tbody>
        </table>

        {showModal && (
          <Backdrop setShowModal={setShowModal}>
            <EditRoutineForm setShowModal={setShowModal} />
          </Backdrop>
        )}
      </div>
    </div>
  );
};

export default ClassRoutine;
