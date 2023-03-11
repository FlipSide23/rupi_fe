import { useState } from 'react';
import NextButton from '../../elements/NextButton';
import PrevButton from '../../elements/PrevButton';
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
          <PrevButton onClick={onPrev} />
          <NextButton onClick={() => onNext(info)} />
        </div>
      </div>
    </div>
  );
};

export default Informations;
