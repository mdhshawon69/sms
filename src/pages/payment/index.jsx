import React from "react";
import { AdmissionTable } from "../../components";
import PaymentSearchForm from "../admission/admission-payment/PaymentTotalSection/PaymentSearchForm/PaymentSearchForm";
import PaymentTotalSection from "../admission/admission-payment/PaymentTotalSection/PaymentTotalSection";
import PaymentFilterButtons from "./PaymentFilterButtons/PaymentFilterButtons";
import PaymentTable from "./PaymentTable/PaymentTable";

const PaymentPage = () => {
  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Payment
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[250px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[150px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      <PaymentTotalSection />
      <PaymentFilterButtons />
      <PaymentSearchForm />
      <PaymentTable />
    </div>
  );
};

export default PaymentPage;
