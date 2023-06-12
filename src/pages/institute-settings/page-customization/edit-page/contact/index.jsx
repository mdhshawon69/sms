import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Banner, Footer } from "../../../../../components";
import { Maps } from "../../../../../components";
import { uiActions } from "../../../../../redux/store/slices/uiSlices";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  if (router.asPath.includes("/edit-page")) {
    dispatch(uiActions.setLayout());
  }
  return (
    <div>
      <Banner
        /* Sending different values for showing alternative text and hiding the button from the banner */
        path={{
          btn: false,
          textAlter: false,
          imageAlter: false,
          heightAlter: true,
          paddingAlter: true,
        }}
        navPath={true}
        subPath={true}
      />
      <div className='mb-10'>
        <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
          Get In Touch
        </h2>
        <div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
            <span className='w-72 py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
            <span className='w-52 py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
          </div>
        </div>
      </div>
      <ContactDetails />
      <Maps />
      <Footer />
    </div>
  );
};

export default Contact;
