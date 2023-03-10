import { useState } from 'react';
import CompanyInformation from './CompanyInformation';
import PersonalInformation from './PersonalInformation';

const Informations = ({ membership, onPrev, onNext }) => {
  const [info, setSelected] = useState();

  const handleSelect = data => {
    setSelected(data);
  };

  return (
    <div>
      <div>
        {membership === 'company' ? (
          <CompanyInformation
            onSelect={handleSelect}
            selected={info}
          />
        ) : (
          <PersonalInformation
            onSelect={handleSelect}
            selected={info}
          />
        )}
      </div>
      <div>
        <div className="flex justify-between mt-16 mb-8">
          <button
            className="text-blue border border-blue rounded-full px-6 py-2 hover:shadow-lg"
            onClick={onPrev}
          >
            Previous
          </button>
          <button
            className="text-white bg-blue rounded-full px-6 py-2 hover:shadow-lg"
            onClick={() => onNext(info)}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Informations;
