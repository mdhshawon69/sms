import { useRouter } from "next/router";
import React from "react";
import images from "../../../assets";
import EditTeacherInfoForm from "../principal-info/EditTeacherInfoForm/EditTeacherInfoForm";
import { Backdrop } from "../../../components";
import { useState } from "react";
import StaffInfoCard from "./StaffInfoCard/StaffInfoCard";

const StaffInfoPage = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const handlePush = (e) => {
    e.preventDefault();
    router.push("/academic/staff-info/add-new-staff");
  };
  const arr = [
    {
      image: images.malePrincipal,
    },
    {
      image: images.teacher1,
    },
    {
      image: images.teacher2,
    },
    {
      image: images.teacher3,
    },
    {
      image: images.teacher4,
    },
    {
      image: images.teacher5,
    },
  ];

  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Staff Info
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
        <div className='flex justify-center flex-wrap gap-12'>
          {arr.map((item, i) => (
            <StaffInfoCard
              image={item.image}
              key={i}
              setShowModal={setShowModal}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <Backdrop setShowModal={setShowModal}>
          <EditTeacherInfoForm
            title="Edit Staff's Info"
            setShowModal={setShowModal}
          />
        </Backdrop>
      )}
    </div>
  );
};

export default StaffInfoPage;
