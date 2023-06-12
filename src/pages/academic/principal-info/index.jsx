import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Backdrop } from "../../../components";
import EditTeacherInfoForm from "./EditTeacherInfoForm/EditTeacherInfoForm";
import PrincipalInfoCard from "./PrincipalInfoCard/PrincipalInfoCard";

const PrincipalInfoPage = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handlePush = (e) => {
    router.push("/academic/principal-info/add-new-principal");
  };

  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Principal
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

      <div>
        <div className='w-11/12 mx-auto text-right my-5'>
          <button
            className='py-2 px-6 bg-primary rounded-md text-white -mr-2'
            onClick={handlePush}>
            Add new
          </button>
        </div>
        <div className='flex justify-center gap-12'>
          <PrincipalInfoCard setShowModal={setShowModal} />
          <PrincipalInfoCard setShowModal={setShowModal} />
        </div>
      </div>

      {showModal && (
        <Backdrop setShowModal={setShowModal}>
          <EditTeacherInfoForm
            title="Edit Principal's Info"
            setShowModal={setShowModal}
          />
        </Backdrop>
      )}
    </div>
  );
};

export default PrincipalInfoPage;
