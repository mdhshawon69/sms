import React from "react";
import MarkDistributionSearchFormSelectorClass from "./MarkDistributionSearchFormSelectorClass";
import MarkDistributionSearchFormSelectorSubject from "./MarkDistributionSearchFormSelectorSubject";
import MarkDistributionSearchFormSelectorExam from "./MarkDistributionSearchFormSelectorExam";
import MarkDistributionSearchFormSelectorSession from "./MarkDistributionSearchFormSelectorSession";

const MarkDistributionSearchForm = () => {
  return (
    <div className='w-full mx-auto py-5 px-3 bg-white border border-[#0D153026] rounded-2xl'>
      <form>
        <div className='flex justify-center items-center gap-5 w-full'>
          <MarkDistributionSearchFormSelectorClass />
          <MarkDistributionSearchFormSelectorSubject />
          <MarkDistributionSearchFormSelectorExam />
          <MarkDistributionSearchFormSelectorSession />
        </div>
        <div className='flex justify-end items-end mt-6'>
          <button className='mr-6 py-1.5 px-9 rounded text-md text-white bg-[#1EB3A6] font-semibold'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default MarkDistributionSearchForm;
