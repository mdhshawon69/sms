import React from "react";
import StudentInfoTotalSection from "./StudentInfoTotalSection/StudentInfoTotalSection";
import PaymentFilterButtons from "../../payment/PaymentFilterButtons/PaymentFilterButtons";
import StudentInfoSearchForm from "./StudentInfoSearchForm/StudentInfoSearchForm";
import StudentInfoTable from "./StudentInfoTable/StudentInfoTable";
import StudentInfoEditForm from "./StudentInfoEditForm/StudentInfoEditForm";
import { Backdrop } from "../../../components";
import { useState } from "react";

const StudentInfoPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Student Info
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

      <StudentInfoTotalSection />
      <PaymentFilterButtons />
      <StudentInfoSearchForm />
      <StudentInfoTable
        setShowModal={setShowAddModal}
        setEditModal={setShowEditModal}
      />

      {showAddModal && (
        <Backdrop setShowModal={setShowAddModal}>
          <StudentInfoAddForm
            setShowModal={setShowAddModal}
            title='Add New Student'
          />
        </Backdrop>
      )}

      {showEditModal && (
        <Backdrop setShowModal={setShowEditModal}>
          <StudentInfoEditForm
            setShowModal={setShowEditModal}
            title='Edit Student Info'
          />
        </Backdrop>
      )}
    </div>
  );
};

export default StudentInfoPage;
