import React from "react";
import { useRouter } from "next/router";
import { Edit, Eye } from "../../../../constants/icons";
import { useDispatch } from "react-redux";
import { idActions } from "../../../../redux/store/slices/idSlice";

const StudentInfoTableData = ({ tableData, setEditModal }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handlePushShow = (id) => {
    router.push(`/student/student-information/view-student-info/${id}`);
  };

  const handleEdit = (id, boolean) => {
    setEditModal(boolean);
    dispatch(idActions.setStudentId({ studentId: id }));
  };

  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.name}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.roll}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.parentName}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.location}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.contact}
          </td>

          <td className='py-3 px-2 text-center'>
            <span className='space-x-3'>
              <button onClick={() => handleEdit(item._id, true)}>
                <Edit className='text-primary h-6 w-6 cursor-pointer' />
              </button>
              <button onClick={() => handlePushShow(item._id)}>
                <Eye className='text-primary h-6 w-6 cursor-pointer' />
              </button>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default StudentInfoTableData;
