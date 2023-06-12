import React from "react";
import { useRouter } from "next/router";
import { Add, Delete, Eye } from "../../../../constants/icons";
import { Axios } from "../../../../core/axios";
import swal from "sweetalert";

const ExamRoutineTableData = ({ examData, refetch }) => {
  const router = useRouter();

  const handlePushAdd = (id) => {
    router.push(`/exams/exam-routine/set-exam-routine/${id}`);
  };

  const handlePushShow = (id) => {
    router.push(`/exams/exam-routine/edit-exam-routine/${id}`);
  };

  const handleDelete = async (id) => {
    const { data } = await Axios.delete(`/admin/exam-routine/${id}`);
    refetch();
    if (data.status === 200) {
      swal("Deleted", "Routine Deleted Successfully", "success");
    }
  };

  return (
    <tbody>
      {examData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 px-20 text-left text-sm font-semibold text-primary-text'>
            {item.examName}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.examYear}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            Class-{item.class}
          </td>

          <td className='py-3 px-2 text-center'>
            <span className='space-x-2'>
              <button onClick={() => handlePushAdd(item._id)}>
                <Add className='text-primary h-6 w-6 cursor-pointer' />
              </button>
              <button onClick={() => handlePushShow(item._id)}>
                <Eye className='text-primary h-6 w-6 cursor-pointer' />
              </button>
              <button onClick={() => handleDelete(item._id)}>
                <Delete className='text-[#FF0000B2] h-6 w-6 cursor-pointer' />
              </button>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ExamRoutineTableData;
