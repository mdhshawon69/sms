import React, { useState } from "react";

const FilterButtons = () => {
  const [bg, setBg] = useState("six");
  return (
    <div className='flex justify-center items-center gap-10 my-14'>
      <button
        className={`py-3 px-10 rounded font-semibold text-md ${
          bg === "six"
            ? "bg-primary text-white"
            : "ring-1 ring-[#1EB3A6] text-[#1EB3A6]"
        }`}
        onClick={() => setBg("six")}>
        Class - 6
      </button>
      <button
        className={`py-3 px-10 rounded font-semibold text-md ${
          bg === "nine"
            ? "bg-primary text-white"
            : "ring-1 ring-[#1EB3A6] text-[#1EB3A6]"
        }`}
        onClick={() => setBg("nine")}>
        Class - 9
      </button>
    </div>
  );
};

export default FilterButtons;
