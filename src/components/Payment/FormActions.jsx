import React from 'react';

const FormActions = () => {
  return (
    <div className="flex items-center space-x-3 md:space-x-6 justify-center px-8">
      <label
        htmlFor="save-card"
        className="flex items-center space-x-1"
      >
        <input type="checkbox" id="save-card" defaultChecked className='p-3' />
        <span className='text-sm'>Save Card</span>
      </label>
      <button
        type="submit"
        className="px-12 rounded-lg py-3 uppercase font-semibold text-slate-800 bg-gradient-to-r from-[#008D41] to-[#67C870]"
      >
        Pay
      </button>
    </div>
  );
};

export default FormActions;
