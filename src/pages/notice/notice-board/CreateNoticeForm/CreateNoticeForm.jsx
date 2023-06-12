import React from "react";
import { useRef } from "react";
import { Cross } from "../../../../constants/icons";
import { Axios } from "../../../../core/axios";
import swal from "sweetalert";

const CreateNoticeForm = ({ setShowModal }) => {
  const titleRef = useRef();
  const dateRef = useRef();
  const fileUrlRef = useRef();

  const createNotice = async (e) => {
    e.preventDefault();

    try {
      const notice = {
        title: titleRef.current.value,
        date: dateRef.current.value,
        fileUrl: fileUrlRef.current.value,
      };

      const { data } = await Axios({
        method: "post",
        url: "/admin/notice",
        data: notice,
      });

      swal(data.message, "Notice Created Successfully!", "success");
    } catch (error) {
      let err = "";
      if (error.response.data.errors === null) {
        err = error.response.data.message;
      } else {
        err = error.response.data.errors[0].msg;
      }

      swal(err, "An Error Has Occured", "error");
    }
  };
  return (
    <div className='w-[500px] h-[380px] bg-white rounded relative'>
      <button onClick={() => setShowModal(false)}>
        <Cross className='absolute top-3 right-3 text-[#7B7B7B]' />
      </button>
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          Create Notice
        </h2>
        <div className='mb-7'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
            <span className='w-[250px] py-[1px] bg-primary' />
            <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
            <span className='w-[150px] py-[1px] bg-primary' />
            <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
          </div>
        </div>
      </div>

      <form className='px-5' onSubmit={createNotice}>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex flex-col justify-start items-start gap-[31px]'>
            <label htmlFor=''>Title</label>
            <label htmlFor=''>Date</label>
            <label htmlFor=''>File URL</label>
          </div>

          <div className='flex flex-col justify-center items-center gap-[31px]'>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <input
              type='text'
              className='py-1 px-2 w-72 border border-gray-400 outline-none rounded'
              ref={titleRef}
            />
            <input
              type='date'
              className='py-1 px-2 w-72 border border-gray-400 outline-none rounded'
              ref={dateRef}
            />
            <input
              type='text'
              className='py-1 px-2 w-72 border border-gray-400 outline-none rounded'
              ref={fileUrlRef}
            />
          </div>
        </div>

        <div className='text-right mt-4'>
          <button
            type='submit'
            className='py-2 px-8 mr-1 mt-5 rounded-sm bg-primary text-white text-xs font-semibold'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNoticeForm;
