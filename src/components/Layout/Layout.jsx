import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  const show = useSelector((state) => state.ui.showLayout);
  return (
    <div>
      <Head>
        <title>SMS-ADMIN</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {show ? (
        <main className='relative'>
          <Navbar />
          <div className='flex justify-center items-stretch'>
            <Sidebar />
            <div className='w-4/5 ml-52 overflow-hidden mt-20'>{children}</div>
          </div>
        </main>
      ) : (
        children
      )}
    </div>
  );
};

export default Layout;
