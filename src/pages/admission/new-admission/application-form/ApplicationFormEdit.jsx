import React from "react";
import { AdmissionForm, Backdrop } from "../../../../components";

const ApplicationFormEdit = ({ setShowModal, applicantData }) => {
  return (
    <div className='w-full mx-auto'>
      <Backdrop setShowModal={setShowModal}>
        <AdmissionForm
          setShowModal={setShowModal}
          applicantData={applicantData}
        />
      </Backdrop>
    </div>
  );
};

export default ApplicationFormEdit;
