import React from "react";
import { Pencil } from "../../constants/icons";

const RoutineEditButton = ({ show, className }) => {
  return (
    <div className='bg-[#0D15300D]/10 backdrop-blur-sm py-[28px] px-[46px] absolute top-0 left-0 hidden group-hover:block'>
      <button className='flex justify-center items-center text-primary font-bold text-lg'>
        Edit <Pencil />
      </button>
    </div>
  );
};

export default RoutineEditButton;
