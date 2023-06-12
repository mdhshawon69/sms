import React from "react";
import images from "../../../../../assets";
import Image from "next/image";
import { useState } from "react";
import { Backdrop } from "../../../../../components";
import CredentialsForm from "../CradentialsForm/CradentialsForm";
import moment from "moment/moment";

const StudentInfoSlip = ({ studentData }) => {
  const [showModal, setShowModal] = useState(false);
  const dateOfBirth = moment(studentData?.dateOfBirth).format("DD/MM/YYYY");

  return (
    <div className='w-3/4 mx-auto '>
      {showModal && (
        <Backdrop setShowModal={setShowModal}>
          <CredentialsForm setShowModal={setShowModal} />
        </Backdrop>
      )}
      <div className='w-full mx-auto pt-5 pb-1 px-9 text-primary-text bg-white relative ring-[0.5px] ring-[#0D1530CC]'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Image src={images.bigLogo} height={750} width={750} />
        </div>
        <div className='text-center space-y-2'>
          <Image src={images.sclLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <p className='text-sm text-primary-text'>68, East Rampura, Dhaka</p>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Student Info
            <span className='bg-gray-400 py-[1px] w-40'></span>
          </h3>
        </div>
        <div className='w-full px-5 mx-auto my-14'>
          <div className='flex justify-end items-end mt-5 mb-8'>
            <Image src={images.studentImg} height={120} width={120} />
          </div>
          <div className='flex justify-between capitalize'>
            <div className='flex justify-between items-center capitalize '>
              <div className='space-y-5 font-semibold text-base'>
                <p>Student Name</p>
                <p>Father’s Name</p>
                <p>Mother’s Name</p>
                <p>Class</p>
                <p>Roll</p>
                <p>Session</p>
                <p>Date of Birth</p>
                <p>Phone</p>
                <p>Religeon</p>
                <p>Blood Group</p>
                <p>Gender</p>
                <p>Nationality</p>
                <p>Present Address</p>
                <p>Permanent Address</p>
              </div>
              <div className='mx-14 space-y-5'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='space-y-5 font-bold text-md'>
                <p className='capitalize'>{studentData?.name}</p>
                <p className='capitalize'>{studentData?.fatherName}</p>
                <p className='capitalize'>{studentData?.motherName}</p>
                <p className='capitalize'>{studentData?.class}</p>
                <p className='capitalize'>{studentData?.roll}</p>
                <p className='capitalize'>{studentData?.passingYear}</p>
                <p>{dateOfBirth}</p>
                <p className='capitalize'>{studentData?.phone}</p>
                <p className='capitalize'>{studentData?.religion}</p>
                <p className='capitalize'>
                  {studentData?.bloodGroup.includes("+")
                    ? studentData?.bloodGroup + " " + "(Positive)"
                    : studentData?.bloodGroup + " " + "(Negative)"}
                </p>
                <p className='capitalize'>{studentData?.gender}</p>
                <p className='capitalize'>{studentData?.nationality}</p>
                <p className='capitalize'>{studentData?.presentAddress}</p>
                <p className='capitalize'>{studentData?.permanentAddress}</p>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center mt-40'>
            <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
              <span className='bg-gray-800 py-[0.5px] w-64'></span>
              Controller of Examination
            </h3>
            <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
              <span className='bg-gray-800 py-[0.5px] w-64'></span>
              Principle Signature
            </h3>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-end items-end gap-3 mx-auto my-16'>
        <button
          className='w-42 border border-[#1EB3A6] bg-[#1EB3A6]/5 py-[11px] px-3 rounded font-semibold text-[#1EB3A6]'
          onClick={() => setShowModal(true)}>
          Student’s credentials
        </button>
        <button className='bg-yellow text-white py-3 w-36 rounded'>
          Print
        </button>
        <button className='bg-primary text-white py-3 w-36 rounded'>
          Download
        </button>
      </div>
    </div>
  );
};

export default StudentInfoSlip;
