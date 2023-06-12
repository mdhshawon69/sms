import {
  DashboardRoutine,
  DashboardTable,
  DashboardTotalSection,
  LineChart,
} from "../components";
import { useState } from "react";
import DashboardCalender from "../components/DashboardParts/DashboardCalender";

const Home = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("jwtToken");
  }

  return (
    <main className='w-11/12 mx-auto pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Dashboard Analytics
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
      <DashboardTotalSection />
      <div className='flex justify-between w-full gap-5 mt-10'>
        <LineChart />
        <DashboardRoutine />
      </div>
      <div className='mt-8 flex gap-5'>
        <DashboardTable />
        <div className='w-2/5 bg-white shadow-md rounded-md overflow-hidden'>
          <span className='font-semibold pt-5 block px-6'>Event Calender</span>
          <DashboardCalender />
        </div>
      </div>
    </main>
  );
};

export default Home;
