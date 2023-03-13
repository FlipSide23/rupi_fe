import React from 'react';

const NextButton = ({ onClick }) => {
  return (
    <button
      className="text-white bg-blue py-1 px-4 text-xs min-[377px]:text-sm rounded-full min-[377px]:px-6 min-[377px]:py-2 hover:shadow-lg"
      onClick={onClick}
    >
      Next Step
    </button>
  );
};

export default NextButton;
