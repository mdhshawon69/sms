import React from "react";
import { useState } from "react";
import { Backdrop } from "../../../components";
import StudentPromotionSearchForm from "./StudentPromotionSearchForm/StudentPromotionSearchForm";
import StudentPromotionForm from "./StudentPromotionForm/StudentPromotionForm";
import ManualPromotionForm from "./ManualPromotionForm/ManualPromotionForm";
import StudentPromotionTable from "./StudentPromotionTable/StudentPromotionTable";

const StudentPromotion = () => {
  const [showModal, setShowModal] = useState(false);
  const [showManualModal, setShowManualModal] = useState(false);

  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Promotion
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
          className='py-3 px-7 rounded bg-primary text-white text-sm font-semibold'
          onClick={() => setShowModal(true)}>
          Student Promotion
        </button>
        <button
          className='py-3 px-7 rounded bg-primary text-white text-sm font-semibold flex justify-center items-center gap-2'
          onClick={() => setShowManualModal(true)}>
          Manual Promotion
        </button>
      </div>

      <StudentPromotionSearchForm />
      <StudentPromotionTable />

      {showModal && (
        <Backdrop setShowModal={setShowModal}>
          <StudentPromotionForm setShowModal={setShowModal} />
        </Backdrop>
      )}

      {showManualModal && (
        <Backdrop setShowModal={setShowManualModal}>
          <ManualPromotionForm setShowModal={setShowManualModal} />
        </Backdrop>
      )}
    </div>
  );
};

export default StudentPromotion;
