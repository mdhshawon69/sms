import React from "react";
import { useState } from "react";
import { RoundCross } from "../../../../constants/icons";

const ClassesTagsInput = () => {
  const [tags, setTags] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
    e.preventDefault();
  };

  const handleRemove = (deleteItem) => {
    const newTags = tags.filter((item) => item !== deleteItem);
    setTags([...newTags]);
  };

  return (
    <div className='w-full py-2.5 rounded text-sm px-3 border border-gray-300 flex justify-center items-center gap-3'>
      {tags.map((item, i) => (
        <span className='flex justify-center items-center shrink-0 gap-1 w-auto px-1.5 shadow-md border border-gray-300 rounded'>
          {item}
          <button onClick={() => handleRemove(item)}>
            <RoundCross className='w-4 h-4 text-red-500' />
          </button>
        </span>
      ))}
      <input
        type='text'
        className='w-full outline-none'
        placeholder={
          !tags.length
            ? "Add Sections for this class ( You can Add multiple sections here)"
            : "Add Sections here"
        }
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ClassesTagsInput;
