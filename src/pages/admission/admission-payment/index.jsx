import React from "react";
import { AdmissionTable, FilterButtons, Backdrop } from "../../../components";
import PaymentSearchForm from "./PaymentTotalSection/PaymentSearchForm/PaymentSearchForm";
import PaymentTotalSection from "./PaymentTotalSection/PaymentTotalSection";
import { useState } from "react";
import { useQuery } from "react-query";
import { Axios } from "../../../core/axios";
import Loading from "../../../components/Loading/Loading";

const AdmissionPaymentPage = () => {
  const [pagination, setPagination] = useState(1);

  const getData = (pagination) => {
    return Axios.get(
      `/admin/admission?skip=${
        pagination === 1 ? 0 : 10 * pagination - 10
      }&limit=10`
    );
  };

  const { isFetching, data } = useQuery(
    ["student-list", pagination],
    () => getData(pagination),
    {
      keepPreviousData: true,
    }
  );

  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Admission Payment
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

      <PaymentTotalSection />
      <FilterButtons />
      <PaymentSearchForm />
      <AdmissionTable
        tableData={data?.data?.data}
        setPagination={setPagination}
      />
      {isFetching && (
        <Backdrop>
          <Loading />
        </Backdrop>
      )}
    </div>
  );
};

export default AdmissionPaymentPage;
