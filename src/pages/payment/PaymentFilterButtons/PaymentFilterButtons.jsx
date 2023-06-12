import React, { useState } from "react";

const PaymentFilterButtons = () => {
  const [active, setActive] = useState("Class - 1");
  const buttonData = [
    "Class - 1",
    "Class - 2",
    "Class - 3",
    "Class - 4",
    "Class - 5",
    "Class - 6",
    "Class - 7",
    "Class - 8",
    "Class - 9",
    "Class - 10",
  ];

  return (
    <div className='flex justify-between items-center w-full my-16 font-semibold'>
      {buttonData.map((item, i) => (
        <button
          className={`py-3 px-[17px] rounded ring-2 ring-primary ${
            active === item
              ? "text-white bg-[#1EB3A6] ring-primary"
              : "text-primary"
          }`}
          onClick={() => setActive(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default PaymentFilterButtons;
