import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import images from "../../assets";
import {
  Clock,
  Email,
  FacebookSquare,
  Linkedin,
  Telephone,
  Twitter,
  Edit,
} from "../../constants/icons";

// <---------------The parent component is Layout.jsx---------------------->

const Footer = () => {
  const router = useRouter();
  const [showInput, setShowInput] = useState("");

  return (
    <div>
      <div className='bg-[#1EB3A6] text-white py-14 relative z-10'>
        <div className='absolute -top-20 right-0 z-20'>
          <Image src={images.footerBg} />
        </div>
        <div className='w-4/5 mx-auto flex justify-between gap-3 items-center z-30 sticky'>
          <div className='w-2/6 space-y-4'>
            <Image src={images.logo} />
            <p className='leading-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              eget felis porttitor morbi at sed nunc mi. Volutpat porttitor duis
            </p>
            <div className='flex justify-start gap-3 items-center '>
              <FacebookSquare className='text-2xl' />
              <Linkedin className='text-2xl' />
              <Twitter className='text-2xl' />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-xl font-bold'>What We Do</h3>
            <div className='flex flex-col justify-start items-start gap-3 text-sm'>
              {showInput === 1 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(1)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Courses</Link>
                </span>
              )}
              {showInput === 2 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(2)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Products</Link>
                </span>
              )}
              {showInput === 3 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(3)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Projects</Link>
                </span>
              )}
              {showInput === 4 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(4)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Services</Link>
                </span>
              )}
              {showInput === 5 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(5)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Laboratory</Link>
                </span>
              )}
              {showInput === 6 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(6)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Research</Link>
                </span>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-xl font-bold'>Our Institute</h3>
            <div className='flex flex-col justify-start items-start gap-3 text-sm'>
              {showInput === 7 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(7)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Home</Link>
                </span>
              )}
              {showInput === 8 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(8)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>About Us</Link>
                </span>
              )}
              {showInput === 9 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(9)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Notice Board</Link>
                </span>
              )}
              {showInput === 10 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(10)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Institution</Link>
                </span>
              )}
              {showInput === 11 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(11)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Student</Link>
                </span>
              )}
              {showInput === 12 ? (
                <input
                  type='text'
                  className='border border-gray-300 bg-transparent outline-none'
                />
              ) : (
                <span className='flex justify-start items-center gap-3'>
                  <span className='bg-white w-6 h-6 rounded-full shadow-md  flex justify-center items-center cursor-pointer border border-gray-300'>
                    <button onClick={() => setShowInput(12)}>
                      <Edit className='text-primary w-4 h-4' />
                    </button>
                  </span>
                  <Link href='#'>Teacher</Link>
                </span>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-3 -mt-[3rem]'>
            <h3 className='text-xl font-bold'>Our Contact</h3>
            <span>SMS– 20853 – Biassono (MB) Via dei Gelsi, 41/43</span>
            <span className='flex items-center justify-start gap-2'>
              <Telephone />
              +39 039 232 4066
            </span>
            <span className='flex items-center justify-start gap-2'>
              <Email /> info@tsitalia.it
            </span>
            <span className='flex items-center justify-start gap-2'>
              <Clock /> Mon – Fri 8:30-18:30
            </span>
          </div>
        </div>
      </div>
      <div
        className={`py-3 px-6 flex justify-between items-center text-primary-color text-sm ${
          router.asPath === "/" ? "mb-[60px]" : ""
        }`}>
        <span>Copyright by SMS</span>
        <span>Site developed & maintained by Make Real</span>
      </div>
    </div>
  );
};

export default Footer;
