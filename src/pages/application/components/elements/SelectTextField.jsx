import { FaAngleDown } from 'react-icons/fa';
const TextField = ({ label, hint }) => {
  const fieldId = label.split(' ').join('');
  return (
    <div className="flex flex-col space-y-2 my-2 md:my-4 w-full">
      <label htmlFor={fieldId} className="text-sm">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={fieldId}
          name={fieldId}
          placeholder={hint}
          className="text-sm px-4 py-2 rounded-full border w-full"
        />
        <span className="right-0 absolute top-0 bottom-0 flex items-center justify-center px-4 text-md text-slate-400">
          <FaAngleDown />
        </span>
      </div>
    </div>
  );
};

export default TextField;
