import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { Delete, Eye } from "../../../constants/icons";
import { Axios } from "../../../core/axios";
import moment from "moment";
import PaginationRounded from "../../../components/PaginationRounded/PaginationRounded";
import { useState } from "react";

const NoticeTable = () => {
  const router = useRouter();
  const [pagination, setPagination] = useState(1);

  const handlePush = () => {
    router.push("/notice/view-notice");
  };

  const handleCreate = () => {
    router.push("/notice/notice-board");
  };

  const getData = () => {
    return Axios.get(
      `/admin/notice?skip=${
        pagination === 1 ? 0 : 10 * pagination - 10
      }&limit=10`
    );
  };

  const { data, refetch } = useQuery(["notice-list", pagination], getData, {
    refetchInterval: 1000,
    enabled: true,
    keepPreviousData: true,
  });

  const deleteNotice = async (id) => {
    const { data } = await Axios({
      method: "delete",
      url: `/admin/notice/${id}`,
    });

    refetch();
    swal(data.message, "Notice Deleted Successfully!", "success");
  };

  return (
    <div className='w-full'>
      <div className='mb-8 mt-20 text-right'>
        <button
          className='py-3 w-44 mr-28 rounded bg-primary text-white font-semibold'
          onClick={handleCreate}>
          Create Notice
        </button>
      </div>

      {data?.data?.data?.length === 0 ? (
        <div className='py-32 text-center'>
          {" "}
          <p className='text-5xl font-semibold text-primary'>
            No Notice Found!
          </p>{" "}
        </div>
      ) : (
        <table className='border-collapse bg-white lg:w-4/5 xl:w-3/5 mx-auto'>
          {/* Mapping through the data.js file to generate table data */}

          {data?.data?.data?.map((item, i) => (
            <tbody key={i}>
              <tr>
                <td className='px-6 py-4 border-[0.5px] border-gray-400 text-left font-bangla'>
                  {item.title}
                </td>
                <td className='px-6 py-4 border-[0.5px] border-gray-400 text-primary-color text-center font-bangla font-semibold'>
                  {moment(item.date).format("DD/MM/YYYY")}
                </td>
                <td className='px-4 py-4 border-[0.5px] border-gray-400 text-center space-x-5'>
                  <button onClick={handlePush}>
                    <Eye className='w-6 h-6 text-primary' />
                  </button>
                  <button onClick={() => deleteNotice(item._id)}>
                    <Delete className='w-6 h-6 text-[#FF0000B2]' />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}

      <div className='flex justify-between items-center mt-6 lg:w-4/5 xl:w-3/5 mx-auto'>
        <p className='font-semibold text-sm'>
          {data?.data?.data?.length} Result
        </p>
        <PaginationRounded setPagination={setPagination} />
      </div>
    </div>
  );
};

export default NoticeTable;
