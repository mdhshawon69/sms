import Image from "next/image";
import React from "react";
import { useState } from "react";
import images from "../../assets";
import {
  FacebookSquare,
  Instagram,
  Youtube,
  Twitter,
  Camera,
  Edit,
} from "../../constants/icons";

// <---------------The parent component is Banner.jsx---------------------->

const SubNav = ({ subPath }) => {
  const [showInput, setShowInput] = useState("");
  return (
    <div
      // <--------------------Dynamically changing the background color of the subnav as per the path got form the props-------------------->
      className={`flex justify-between items-center w-full overflow-hidden  ${
        !subPath ? "bg-primary px-40" : "py-0"
      }`}>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center gap-3'>
          <Image src={images.logo} width={150} />
          <label className='w-8 h-8 rounded-full bg-white flex justify-center items-center file shadow-md'>
            <Camera className='w-5 h-5 text-primary cursor-pointer' />
            <input type='file' />
          </label>
        </div>
      </div>
      <div className='flex justify-between items-center gap-5'>
        <a href='#'>
          <Image src={images.playStore} width={120} />
        </a>
        <div className='flex justify-around items-center gap-5'>
          {showInput === 1 ? (
            <input
              type='text'
              className='outline-none border border-gray-300 w-40 text-white bg-transparent font-semibold'
            />
          ) : (
            <span className='flex justify-center items-center text-white font-semibold text-md gap-1'>
              <span className='bg-white w-8 h-8 rounded-full shadow-md flex justify-center items-center cursor-pointer'>
                <button onClick={() => setShowInput(1)}>
                  <Edit className='text-primary w-5 h-5' />
                </button>
              </span>
              01944054129
            </span>
          )}
          {showInput === 2 ? (
            <input
              type='text'
              className='outline-none border border-gray-300 w-40 text-white bg-transparent font-semibold'
            />
          ) : (
            <span className='flex justify-center items-center text-white font-semibold text-md gap-1'>
              <span className='bg-white w-8 h-8 rounded-full shadow-md flex justify-center items-center cursor-pointer'>
                <button onClick={() => setShowInput(2)}>
                  <Edit className='text-primary w-5 h-5' />
                </button>
              </span>
              01844054129
            </span>
          )}
        </div>

        {/* Social Icons Section */}
        <div className='flex justify-center items-center gap-3.5'>
          {/* Facebook Icon */}
          <span className='flex justify-center items-center bg-white p-1.5 rounded-full relative'>
            <span className='bg-white w-5 h-5 rounded-full shadow-xl flex justify-center items-center cursor-pointer absolute -top-[6px] -left-[10px]'>
              <Edit className='text-primary w-3 h-3' />
            </span>
            <a href='#'>
              <FacebookSquare className='text-base text-primary-color' />
            </a>
          </span>

          {/* Instagram Icon */}
          <span className='flex justify-center items-center bg-white p-1.5 rounded-full relative'>
            <span className='bg-white w-5 h-5 rounded-full shadow-xl flex justify-center items-center cursor-pointer absolute -top-[6px] -left-[10px]'>
              <Edit className='text-primary w-3 h-3' />
            </span>
            <a href='#'>
              <Instagram className='text-base text-primary-color' />
            </a>
          </span>

          {/* Twitter Icon */}
          <span className='flex justify-center items-center bg-white p-1.5 rounded-full relative'>
            <span className='bg-white w-5 h-5 rounded-full shadow-xl flex justify-center items-center cursor-pointer absolute -top-[6px] -left-[10px]'>
              <Edit className='text-primary w-3 h-3' />
            </span>
            <a href='#'>
              <Twitter className='text-base text-primary-color' />
            </a>
          </span>

          {/* Youtube Icon */}
          <span className='flex justify-center items-center bg-white p-1.5 rounded-full relative'>
            <span className='bg-white w-5 h-5 rounded-full shadow-xl flex justify-center items-center cursor-pointer absolute -top-[6px] -left-[10px]'>
              <Edit className='text-primary w-3 h-3' />
            </span>
            <a href='#'>
              <Youtube className='text-base text-primary-color' />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
