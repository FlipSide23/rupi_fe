import { FaFile, FaRegFilePdf, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const ChooseFileField = ({ label }) => {
  const fieldId = label.split(' ').join('-');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragError, setDragError] = useState();

  const handleClickUpload = e => {
    const input = document.getElementById(fieldId);
    setDragError(undefined);
    input.click();
  };

  const handleFileChange = e => {
    const files = e.target.files;
    if (files.length === 0) return;

    const choosenFiles = Object.keys(files).map(i => {
      return files[i];
    });
    setSelectedFiles(prev => [...prev, ...choosenFiles]);
  };

  const removeFile = name => {
    setSelectedFiles(
      selectedFiles.filter(file => file.name !== name),
    );
  };

  return (
    <div className="flex flex-col space-y-2 w-full my-2 md:my-4">
      <label htmlFor={fieldId} className="text-sm">
        {label}
      </label>
      <input
        type="file"
        id={fieldId}
        name={fieldId}
        accept="application/pdf"
        multiple={true}
        className="hidden"
        onChange={handleFileChange}
      />
      <div
        className={`${
          isDragging ? 'bg-green text-white' : 'bg-slate-100'
        } border border-slate-300 rounded-3xl h-48 overflow-scroll text-xs`}
      >
        <div className="bg-white flex justify-between px-8 py-2 items-center">
          {selectedFiles.length == 0 ? (
            <div></div>
          ) : (
            <div className="border rounded-full py-1 px-2 text-[8px]">
              {selectedFiles.length > 9
                ? selectedFiles.length
                : '0' + selectedFiles.length}
            </div>
          )}
          <button
            className="bg-black text-white rounded-full px-4 py-[3px] outline-none border-0"
            onClick={handleClickUpload}
          >
            {selectedFiles.length == 0 ? 'Upload' : 'Add +'}
          </button>
          <div className="border rounded-full py-1.5 px-1.5">
            <FaFile />
          </div>
        </div>

        <div
          className="flex items-center text-center justify-center"
          onDrop={e => {
            e.preventDefault();
            const draggedFiles = e.dataTransfer.files;

            const files = Object.keys(draggedFiles).map(index => {
              const file = draggedFiles[index];
              if (file.type === 'application/pdf') {
                return file;
              }
            });

            const pdfs = files.filter(file => file);
            setSelectedFiles(prev => [...prev, ...pdfs]);
            const unaccepted = files.length - pdfs.length;

            setIsDragging(false);

            if (unaccepted > 0) {
              setDragError(
                unaccepted +
                  ' files are not accepted, not in pdf format*',
              );
            }
          }}
          onDragLeave={e => {
            setIsDragging(false);
          }}
          onDragOver={e => {
            e.preventDefault();
            setDragError(undefined);
            setIsDragging(true);
          }}
        >
          {selectedFiles.length === 0 ? (
            <p className="pt-10">
              Or
              <br />
              Drag and drop your files here
            </p>
          ) : (
            <div className="flex flex-col w-full h-full mx-4 my-2">
              {selectedFiles.map((file, index) => {
                return (
                  <div
                    key={index}
                    className="w-full border rounded-md p-2 flex items-center space-x-2 my-[1.5px] justify-between"
                  >
                    <FaRegFilePdf className="text-red-300" />
                    <p className="text-[8px] leading-[10px] flex-grow text-left">
                      {file.name}
                    </p>
                    <FaTimes
                      className="text-slate-500 cursor-pointer hover:text-red-400"
                      onClick={() => removeFile(file.name)}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {selectedFiles.length > 0 && (
        <p className="text-red-500 text-xs">{dragError}</p>
      )}
    </div>
  );
};

export default ChooseFileField;
