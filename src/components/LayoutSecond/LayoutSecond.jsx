import React from "react";
import NavbarSecond from "../NavbarSecond/NavbarSecond";
import SubNav from "../SubNav/SubNav";

const LayoutSecond = ({ children, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <SubNav subPath={false} />
      <div className='w-4/5 mx-auto relative'>
        <NavbarSecond navPath={false} />
      </div>

      {children}
    </div>
  );
};

export default LayoutSecond;
