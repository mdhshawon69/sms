import React, { useRef } from "react";
import moment from "moment/moment";
import { useState } from "react";
import AdmissionFormSelector from "./AdmissionFormSelector";
import { Axios } from "../../core/axios";
import swal from "sweetalert";

const AdmissionFormInputs = ({ applicantData }) => {
  const [className, setClassName] = useState(applicantData.applicantsClass);
  const rollRef = useRef();
  const regRef = useRef();
  const nameRef = useRef();
  const fatherRef = useRef();
  const motherRef = useRef();
  const dateOfBirthRef = useRef();
  const phoneRef = useRef();
  const religionRef = useRef();
  const genderRef = useRef();
  const bloodGroupRef = useRef();
  const presentAddressRef = useRef();
  const permanentAddressRef = useRef();
  const passingYearRef = useRef();
  const gpaRef = useRef();
  const institutionNameRef = useRef();
  const boardRef = useRef();

  const dateOfBirth = moment(applicantData?.dateOfBirth).format("MM/DD/YYYY");

  const editStudentInfo = async (e) => {
    e.preventDefault();
    const editedData = {
      applicantsClass: className,
      applicantsName: nameRef.current.value,
      fatherName: fatherRef.current.value,
      motherName: motherRef.current.value,
      dateOfBirth: dateOfBirthRef.current.value,
      phone: phoneRef.current.value,
      religion: religionRef.current.value,
      bloodGroup: bloodGroupRef.current.value,
      presentAddress: presentAddressRef.current.value,
      permanentAddress: permanentAddressRef.current.value,
      gender: genderRef.current.value,
      jscRoll: rollRef.current.value,
      registrationNo: regRef.current.value,
      passingYear: passingYearRef.current.value,
      gpa: gpaRef.current.value,
      institutionName: institutionNameRef.current.value,
      board: boardRef.current.value,
    };

    try {
      const { data } = await Axios({
        method: "patch",
        url: `/admin/admission/${applicantData._id}`,
        data: editedData,
      });

      swal(data.message, "Information Edited Successfully!", "success");
    } catch (error) {
      const err =
        error.response.data.errors === undefined
          ? error.response.data.message
          : error.response.data.errors[0].msg;
      swal(err, "An Error Has Occured!", "error");
    }
  };
  return (
    <form onSubmit={editStudentInfo} className='relative'>
      <div className='text-primary-text lg:space-y-6 xl:space-y-5 flex justify-start items-start flex-col'>
        <AdmissionFormSelector
          setClassName={setClassName}
          className={className}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter J.S.C Roll No'
          defaultValue={applicantData.jscRoll}
          ref={rollRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Registration No'
          defaultValue={applicantData.registrationNo}
          ref={regRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's name"
          defaultValue={applicantData.applicantsName}
          ref={nameRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's Father’s name"
          defaultValue={applicantData.fatherName}
          ref={fatherRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's Mother’s name"
          defaultValue={applicantData.motherName}
          ref={motherRef}
        />

        <div className='flex justify-between items-center gap-2 w-[600px]'>
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder='Date Of Birth'
            defaultValue={dateOfBirth}
            ref={dateOfBirthRef}
          />
          {/* <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder='Month'
          />
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder='Year'
          /> */}
        </div>

        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Entre Phone Number'
          defaultValue={applicantData.phone}
          ref={phoneRef}
        />

        {/* Text input with radio's */}
        <div className='flex justify-between items-center w-[600px]'>
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-[300px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder="Enter Applicant's Religion"
            defaultValue={applicantData.religion}
            ref={religionRef}
          />
          <div className='flex justify-center items-center gap-6 w-[300px]'>
            <span className='xl:text-lg lg:text-md font-semibold'>
              Gender :
            </span>
            <div className='flex justify-center items-center gap-2 xl:mt-1.5 lg:mt-1'>
              <input
                type='radio'
                name='gender'
                id='male'
                className='w-4 h-4'
                value='male'
                defaultChecked={applicantData.gender === "male" ? true : false}
                ref={genderRef}
              />
              <label htmlFor='male' className='text-md font-semibold'>
                Male
              </label>
            </div>

            <div className='flex justify-center items-center gap-2 xl:mt-1.5 lg:mt-1'>
              <input
                type='radio'
                name='gender'
                id='female'
                className='w-4 h-4 '
                value='female'
                defaultChecked={
                  applicantData.gender === "female" ? true : false
                }
                ref={genderRef}
              />
              <label htmlFor='female' className='text-md font-semibold'>
                Female
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center gap-5 mt-1.5'>
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder="Enter Applicant's Blood Group"
            defaultValue={applicantData.bloodGroup}
            ref={bloodGroupRef}
          />

          {/* <label htmlFor='' className='xl:text-xl lg:text-md text-primary-text'>
            Nationality :
          </label>
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-[230px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder="Enter Applicant's Nationality"
          /> */}
        </div>

        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Present Address'
          defaultValue={applicantData.presentAddress}
          ref={presentAddressRef}
        />

        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Permanent Address'
          defaultValue={applicantData.permanentAddress}
          ref={permanentAddressRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's Passing Year"
          defaultValue={applicantData.passingYear}
          ref={passingYearRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's Result/GPA"
          defaultValue={applicantData.gpa}
          ref={gpaRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Institution Name'
          defaultValue={applicantData.institutionName}
          ref={institutionNameRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Board Name'
          defaultValue={applicantData.board}
          ref={boardRef}
        />
        <label
          htmlFor='file'
          className='file w-[600px] rounded rounded-tl-none rounded-bl-none ring-1 placeholder:text-xs ring-gray-400 outline-none flex justify-start items-start gap-1'>
          <span className='px-10 xl:py-2 lg:py-1.5 bg-[#EFEFEF]'>
            Choose File
          </span>
          <span className='px-4 xl:py-2 lg:py-1.5'>No file choosen</span>
          <input type='file' name='image' id='file' />
        </label>
      </div>

      <button className='py-3 px-8 bg-primary text-white rounded absolute -bottom-20 right-0'>
        Update
      </button>
    </form>
  );
};

export default AdmissionFormInputs;
