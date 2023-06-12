import React, { useRef } from "react";
import { useState } from "react";
import StudentInfoAddFormSelector from "./StudentInfoEditFormSelector";
import moment from "moment/moment";
import { Axios } from "../../../../core/axios";
import swal from "sweetalert";

const StudentInfoEditFormInputs = ({ studentData }) => {
  const [studentClass, setStudentClass] = useState(studentData?.class);
  const pscRollRef = useRef();
  const jscRollRef = useRef();
  const registrationNoRef = useRef();
  const nameRef = useRef();
  const fatherNameRef = useRef();
  const motherNameRef = useRef();
  const dateOfBirthRef = useRef();
  const phoneRef = useRef();
  const religionRef = useRef();
  const bloodGroupRef = useRef();
  const genderRef = useRef();
  const nationalityRef = useRef();
  const presentAddressRef = useRef();
  const permanentAddressRef = useRef();
  const passingYearRef = useRef();
  const gpaRef = useRef();
  const institutionNameRef = useRef();
  const boardRef = useRef();

  const dateOfBirth = moment(studentData?.dateOfBirth).format("DD/MM/YYYY");

  //Student creating function
  const createStudent = async (e) => {
    e.preventDefault();
    try {
      const student = {
        class: studentClass,
        pscRoll: pscRollRef.current.value,
        jscRoll: jscRollRef.current.value,
        registrationNo: registrationNoRef.current.value,
        name: nameRef.current.value,
        fatherName: fatherNameRef.current.value,
        motherName: motherNameRef.current.value,
        dateOfBirth: dateOfBirthRef.current.value,
        phone: phoneRef.current.value,
        religion: religionRef.current.value,
        bloodGroup: bloodGroupRef.current.value,
        gender: genderRef.current.value,
        nationality: nationalityRef.current.value,
        presentAddress: presentAddressRef.current.value,
        permanentAddress: permanentAddressRef.current.value,
        passingYear: passingYearRef.current.value,
        gpa: gpaRef.current.value,
        institutionName: institutionNameRef.current.value,
        board: boardRef.current.value,
      };
      const { data } = await Axios({
        method: "patch",
        url: `/admin/student/${studentData._id}`,
        data: student,
      });
      swal(data.message, "Successful", "success");
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
    <form
      className='text-primary-text lg:space-y-6 xl:space-y-5 flex justify-start items-start flex-col relative'
      onSubmit={createStudent}>
      <StudentInfoAddFormSelector
        setStudentClass={setStudentClass}
        studentClass={studentClass}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder='Enter P.S.C Roll No'
        ref={pscRollRef}
        defaultValue={studentData?.pscRoll}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder='Enter J.S.C Roll No'
        ref={jscRollRef}
        defaultValue={studentData?.jscRoll}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder='Enter Registration No'
        ref={registrationNoRef}
        defaultValue={studentData?.registrationNo}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder="Enter Applicant's name"
        ref={nameRef}
        defaultValue={studentData?.name}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder="Enter Applicant's Father’s name"
        ref={fatherNameRef}
        defaultValue={studentData?.fatherName}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder="Enter Applicant's Mother’s name"
        ref={motherNameRef}
        defaultValue={studentData?.motherName}
      />

      <div className='flex justify-between items-center gap-2 w-[600px]'>
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-full rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
          placeholder='Date Of Birth'
          ref={dateOfBirthRef}
          defaultValue={dateOfBirth}
        />
        {/* <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
          placeholder='Month'
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
          placeholder='Year'
        /> */}
      </div>

      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder='Entre Phone Number'
        ref={phoneRef}
        defaultValue={studentData?.phone}
      />

      {/* Text input with radio's */}
      <div className='flex justify-between items-center w-[600px]'>
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[300px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
          placeholder="Enter Applicant's Religion"
          ref={religionRef}
          defaultValue={studentData?.religion}
        />
        <div className='flex justify-center items-center gap-6 w-[300px]'>
          <span className='xl:text-lg lg:text-md font-semibold'>Gender :</span>
          <div className='flex justify-center items-center gap-2 xl:mt-1.5 lg:mt-1'>
            <input
              type='radio'
              name='gender'
              id='male'
              className='w-4 h-4'
              value='male'
              ref={genderRef}
              defaultValue={studentData?.gender}
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
              className='w-4 h-4'
              value='female'
              ref={genderRef}
              defaultValue={studentData?.gender}
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
          className='px-5 xl:py-2 lg:py-1.5 w-[230px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
          placeholder="Enter Applicant's Blood Group"
          ref={bloodGroupRef}
          defaultValue={studentData?.bloodGroup}
        />

        <label htmlFor='' className='xl:text-xl lg:text-md text-primary-text'>
          Nationality :
        </label>
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[230px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
          placeholder="Enter Applicant's Nationality"
          ref={nationalityRef}
          defaultValue={studentData?.nationality}
        />
      </div>

      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder='Enter Present Address'
        ref={presentAddressRef}
        defaultValue={studentData?.presentAddress}
      />

      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder='Enter Permanent Address'
        ref={permanentAddressRef}
        defaultValue={studentData?.permanentAddress}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder="Enter Applicant's Passing Year"
        ref={passingYearRef}
        defaultValue={studentData?.passingYear}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder="Enter Applicant's Result/GPA"
        ref={gpaRef}
        defaultValue={studentData?.gpa}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder='Enter Institution Name'
        ref={institutionNameRef}
        defaultValue={studentData?.institutionName}
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 ring-gray-400 outline-none placeholder:text-sm'
        placeholder='Enter Board Name'
        ref={boardRef}
        defaultValue={studentData?.board}
      />
      <label
        htmlFor='file'
        className='file w-[600px] rounded rounded-tl-none rounded-bl-none ring-1 ring-gray-400 outline-none flex justify-start items-start gap-1'>
        <span className='px-10 xl:py-2 lg:py-1.5 bg-[#EFEFEF]'>
          Choose File
        </span>
        <span className='px-4 xl:py-2 lg:py-1.5'>No file choosen</span>
        <input type='file' name='image' id='file' />
      </label>

      <button className='py-3 px-8 bg-primary text-white rounded absolute -bottom-20 right-0'>
        Update
      </button>
    </form>
  );
};

export default StudentInfoEditFormInputs;
