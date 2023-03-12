import React from 'react';

const TextField = ({ type, label, hint }) => {
  return (
    <div className="flex flex-col w-full my-2 md:my-4">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={hint}
        id={label}
        name={label}
        className="border-0 ring-0 bg-gray-200 px-4 py-2 rounded-md my-2 placeholder:text-xs text-sm "
      />
    </div>
  );
};

export default TextField;
