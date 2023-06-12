import React from "react";
import { useRouter } from "next/router";

const Backdrop = ({ children, setShowModal }) => {
  const router = useRouter();
  const handleShowModal = (e) => {
    if (e.target.id === "backdrop") {
      setShowModal(false);
    }
  };
  return (
    <div
      className={`bg-backdrop ${
        router.asPath.includes("/admission") ||
        router.asPath.includes("/student/student-information")
          ? "absolute -mb-96"
          : "fixed"
      } top-0 inset-0 z-10 flex justify-center items-center lg:w-[87%] xl:w-[90%] ml-auto`}
      id='backdrop'
      onClick={handleShowModal}>
      {children}
    </div>
  );
};

export default Backdrop;
