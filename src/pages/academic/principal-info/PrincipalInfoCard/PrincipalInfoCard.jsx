import React from "react";
import images from "../../../../assets";
import Image from "next/image";
import { ThreeDots } from "../../../../constants/icons";

const PrincipalInfoCard = ({ setShowModal }) => {
  return (
    <div className='w-[500px] py-6 px-5 bg-white rounded-md shadow-sm border border-gray-300 flex gap-7 relative'>
      <button
        className='absolute top-3 right-2'
        onClick={() => setShowModal(true)}>
        <ThreeDots />
      </button>
      <div>
        <Image src={images.malePrincipal} />
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

export default PrincipalInfoCard;
