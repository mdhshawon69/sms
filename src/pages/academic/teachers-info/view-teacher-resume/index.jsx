import Image from "next/image";
import React from "react";
import { useState } from "react";
import images from "../../../../assets";
import { Delete } from "../../../../constants/icons";
import { Backdrop } from "../../../../components";
import CredentialsForm from "../../../student/student-information/view-student-info/CradentialsForm/CradentialsForm";
import TeacherCredentialsForm from "./TeacherCradentialsForm/TeacherCradentialsForm";

const ViewTeacherResumePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Add Principles CV
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[350px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[250px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      <div className='my-10'>
        <form className='flex justify-center items-center gap-3'>
          <label
            htmlFor='file'
            className='file w-72 ring-1 ring-gray-400 outline-none flex justify-start items-start gap-1'>
            <span className='text-sm xl:py-2 lg:py-2 lg:px-2'>Insert file</span>
            <input type='file' name='image' id='file' />
          </label>
          <button className='py-2 px-6 rounded text-white bg-primary'>
            Upload CV
          </button>
        </form>
      </div>

      <div className='my-20'>
        <div className='flex justify-end items-end'>
          <button className='text-white py-2 px-3 flex justify-center items-center gap-1 rounded bg-[#FF9900] mr-[68px]'>
            Delete CV <Delete className='w-5 h-5' />
          </button>
        </div>

        <div>
          <Image src={images.principalCV} />
        </div>

        {showModal && (
          <Backdrop setShowModal={setShowModal}>
            <TeacherCredentialsForm setShowModal={setShowModal} />
          </Backdrop>
        )}

        <div className='w-full flex justify-end items-end gap-3 mx-auto'>
          <button
            className='w-42 border border-[#1EB3A6] bg-[#1EB3A6]/5 py-[11px] px-3 rounded font-semibold text-[#1EB3A6]'
            onClick={() => setShowModal(true)}>
            Teacher’s credentials
          </button>
          <button className='bg-yellow text-white py-3 w-36 rounded'>
            Print
          </button>
          <button className='bg-primary text-white py-3 w-36 rounded mr-[65px]'>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTeacherResumePage;
