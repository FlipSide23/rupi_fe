import { FaFile, FaFilter } from 'react-icons/fa';

const ChooseFileField = ({ label }) => {
  const fieldId = label.split(' ').join('');
  return (
    <div className="flex flex-col space-y-2 w-full my-2 md:my-4">
      <label htmlFor={fieldId} className="text-sm">
        {label}
      </label>
      <div className="border border-slate-300 rounded-3xl h-48 bg-slate-100 overflow-hidden text-xs">
        <div className="bg-white flex justify-between px-8 py-2">
          <div></div>
          <button className="bg-black text-white rounded-full px-4 py-[0px] outline-none border-0">
            Upload
          </button>
          <div className="border rounded-full py-1.5 px-1.5">
            <FaFile />
          </div>
        </div>
        <div className="flex items-center text-center justify-center pt-10">
          <p>
            Or
            <br />
            Drag and drop your files here
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseFileField;
