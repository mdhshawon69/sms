import moment from "moment";
import React, { useRef } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Cross } from "../../../../constants/icons";
import { Axios } from "../../../../core/axios";
import swal from "sweetalert";

const EditNoticeForm = ({ setShowModal }) => {
  const titleRef = useRef();
  const dateRef = useRef();
  const fileUrlRef = useRef();
  const noticeId = useSelector((state) => state.id.noticeId);
  const getData = () => {
    return Axios.get(`/admin/notice/${noticeId}`);
  };
  const { data } = useQuery("individual-notice", getData);

  const handleEditNotice = async (e) => {
    e.preventDefault();
    try {
      const EditedNotice = {
        title: titleRef.current.value,
        date: dateRef.current.value,
        fileUrl: fileUrlRef.current.value,
      };

      const { data } = await Axios({
        method: "patch",
        url: `/admin/notice/${noticeId}`,
        data: EditedNotice,
      });

      swal(data.message, "Notice Edited Successfully!", "success");
    } catch (error) {
      let err = "";
      if (error.response.data.errors === "undefined") {
        err = error.response.data.message;
      } else {
        err = error?.response?.data?.errors[0].msg;
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
          Edit Notice
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

      <form className='px-5' onSubmit={handleEditNotice}>
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
              defaultValue={data?.data?.data?.title}
              ref={titleRef}
            />
            <input
              type='date'
              className='py-1 px-2 w-72 border border-gray-400 outline-none rounded'
              defaultValue={moment(data?.data?.data?.date).format("YYYY-MM-DD")}
              ref={dateRef}
            />
            <input
              type='text'
              className='py-1 px-2 w-72 border border-gray-400 outline-none rounded'
              defaultValue={data?.data?.data?.file}
              ref={fileUrlRef}
            />
          </div>
        </div>

        <div className='text-right mt-4'>
          <button
            type='submit'
            className='py-2 px-8 mr-1 mt-5 rounded-sm bg-primary text-white text-xs font-semibold'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNoticeForm;
