import Image from "next/image";
import React from "react";
import images from "../../../../../assets";
import ExamRoutineTableData from "./ExamRoutineTableData";

const ExamRoutine = ({
  setShowDateModal,
  setShowTimeModal,
  setShowSubjectModal,
  examData,
}) => {
  //Sorting exams by the date
  function compare(a, b) {
    if (a.startDateTime < b.startDateTime) {
      return -1;
    }
    if (a.startDateTime > b.startDateTime) {
      return 1;
    }
    return 0;
  }

  examData?.examsData?.sort(compare);

  return (
    <div>
      <div className='w-9/12 mx-auto py-10 px-10 bg-white text-primary-text relative'>
        <div className='text-center space-y-2'>
          <Image src={images.sclLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1 w-fit mx-auto'>
            {examData?.examName} - 2022
            <span className='bg-gray-400 py-[1px] w-full'></span>
          </h3>
          <p>Class - {examData?.class}</p>
        </div>
        <table className='border-collapse w-full my-10 text-gray-600 '>
          <thead>
            <tr>
              <th className='border-[0.5px] border-gray-400 py-2 px-3'>Date</th>
              <th className='border-[0.5px] border-gray-400 py-2 px-3'>Time</th>
              <th className='border-[0.5px] border-gray-400 py-2 px-3'>
                Subject
              </th>
            </tr>
          </thead>
          {examData?.examsData?.map((item, i) => (
            <ExamRoutineTableData
              key={i}
              data={item}
              setShowDateModal={setShowDateModal}
              setShowTimeModal={setShowTimeModal}
              setShowSubjectModal={setShowSubjectModal}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default ExamRoutine;
