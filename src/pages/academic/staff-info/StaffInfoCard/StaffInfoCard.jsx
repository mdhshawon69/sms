import React from "react";
import images from "../../../../assets";
import Image from "next/image";
import { ThreeDots } from "../../../../constants/icons";
import { useRouter } from "next/router";

const StaffInfoCard = ({ setShowModal, image }) => {
  const router = useRouter();
  const handlePush = (e) => {
    e.preventDefault();
    router.push("/academic/staff-info/view-staff-resume");
  };

  return (
    <div className='w-[500px] py-6 px-5 bg-white rounded-md shadow-sm border border-gray-300 flex gap-7 relative'>
      <span className='absolute top-3 right-2 group cursor-pointer'>
        <ThreeDots />
        <span className='flex flex-col absolute right-2 w-40 invisible group-hover:visible'>
          <button
            className='py-1 px-5 text-white bg-[#4fcabf] border-b border-gray-300 text-left hover:bg-primary'
            onClick={() => setShowModal(true)}>
            Edit info
          </button>
          <button
            className='py-1 px-5 text-white bg-[#4fcabf] hover:bg-primary'
            onClick={handlePush}>
            View Resume
          </button>
        </span>
      </span>

      <div>
        <Image src={image} />
      </div>
      <div className='flex justify-between items-center gap-5 font-semibold'>
        <div className='space-y-3'>
          <p>Name</p>
          <p>Position</p>
          <p>Phone</p>
          <p>Email</p>
          <p>Address</p>
        </div>
        <div className='space-y-3'>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <div className='space-y-3'>
          <p>Mustafa Kamal</p>
          <p>Principal</p>
          <p>01647622755</p>
          <p>user@gmail.com</p>
          <p>Zero point, Rajshahi</p>
        </div>
      </div>
    </div>
  );
};

export default StaffInfoCard;
