import React from "react";
import { useRef } from "react";
import EditPagesMenu from "./EditPagesMenu";

const PageCustomizationPage = () => {
  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold outline-none'>
          Page Custimzation
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[400px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[300px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      <div className='flex justify-between gap-5'>
        <EditPagesMenu />
        <div id='wrap border'>
          <iframe src='https://sms.makereal.click' id='scaled-frame'></iframe>
        </div>
      </div>
    </div>
  );
};

export default PageCustomizationPage;
