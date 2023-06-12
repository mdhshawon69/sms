import moment from "moment/moment";
import React from "react";
import { Delete, Edit } from "../../../../constants/icons";
import swal from "sweetalert";
import { Axios } from "../../../../core/axios";
import { useDispatch } from "react-redux";
import { idActions } from "../../../../redux/store/slices/idSlice";

const NoticeBoardTableData = ({ tableData, setShowModal }) => {
  const dispatch = useDispatch();
  const deleteNotice = async (id) => {
    const { data } = await Axios({
      method: "delete",
      url: `/admin/notice/${id}`,
    });
    swal(data.message, "Notice Deleted Successfully!", "success");
  };

  const handleEdit = (id) => {
    dispatch(idActions.setNoticeId({ noticeId: id }));
    setShowModal(true);
  };

  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 text-center text-sm font-semibold text-primary-text'>
            PDF
          </td>
          <td className='py-4 text-center text-sm font-semibold text-primary-text'>
            {item?.title}
          </td>
          <td className='py-4 text-center text-sm font-semibold text-primary-text'>
            {moment(item?.date).format("DD/MM/YYYY")}
          </td>

          <td className='py-3 px-2 text-center cursor-pointer space-x-2'>
            <button onClick={() => handleEdit(item._id)}>
              <Edit className='text-primary h-6 w-6' />
            </button>
            <button onClick={() => deleteNotice(item._id)}>
              <Delete className='text-[#FF0000B2] h-6 w-6' />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default NoticeBoardTableData;
