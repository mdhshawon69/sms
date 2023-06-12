import React from "react";
import { Cross } from "../../constants/icons";
import AdmissionFormColons from "./AdmissionFormColons";
import AdmissionFormInputs from "./AdmissionFormInputs";
import AdmissionFormLabels from "./AdmissionFormLabels";

const AdmissionForm = ({ setShowModal, applicantData }) => {
  return (
    <div>
      <div className='lg:w-[1000px] xl:w-[1200px] -mt-[520px] rounded-lg mx-auto p-10 bg-white text-primary-text relative'>
        <button onClick={() => setShowModal(false)}>
          <Cross className='w-6 h-6 absolute top-4 right-4 cursor-pointer' />
        </button>
        <div>
          <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
            Edit Application Form
          </h2>
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
              <span className='w-[450px] py-[1px] bg-primary' />
              <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
              <span className='w-[350px] py-[1px] bg-primary' />
              <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
            </div>
          </div>
        </div>

        {/* Admission from inputs */}
        <div>
          <div className='flex justify-between items-center xl:w-4/5 lg:w-11/12 mx-auto mt-16 pb-20'>
            <AdmissionFormLabels />
            <AdmissionFormColons />
            <AdmissionFormInputs applicantData={applicantData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
