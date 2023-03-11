import { useState } from 'react';
import Select from 'react-select';

const TextField = ({ label, hint, options }) => {
  const fieldId = label.split(' ').join('');

  const [selectedOption, setSelectedOption] = useState();

  const handleChange = option => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col space-y-2 my-2 md:my-4 w-full">
      <label htmlFor={fieldId} className="text-sm">
        {label}
      </label>
      <div className="relative">
        <Select
          placeholder={hint}
          value={selectedOption}
          onChange={handleChange}
          options={options}
          isSearchable={true}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: '25px',
              padding: '0px 10px',
              borderColor: 'bg-slate-500',
            }),
          }}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              // primary25: 'hotpink',
              primary: '#008D41',
            },
          })}
        />
      </div>
    </div>
  );
};

export default TextField;
