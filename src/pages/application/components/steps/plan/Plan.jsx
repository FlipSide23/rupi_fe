import React, { useState } from 'react';
import { defaultPlans } from '../../../../../components/Home/MembershipFees/data';
import NextButton from '../../elements/NextButton';
import PrevButton from '../../elements/PrevButton';
import CompanyPlan from './CompanyPlan';
import IndividualPlan from './IndividualPlan';

const Plan = ({ membership, onPrev, onNext, plan }) => {
  const [selected, setSelected] = useState(
    plan ?? defaultPlans[membership],
  );

  const handleSelect = data => {
    setSelected(data);
  };

  return (
    <div>
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-lg font-semibold my-2">Choose Plan</h1>
        <p className="text-sm">
          Select a plan that is suitable for you
        </p>
      </div>
      <div>
        {membership === 'company' ? (
          <CompanyPlan onSelect={handleSelect} selected={selected} />
        ) : (
          <IndividualPlan
            onSelect={handleSelect}
            selected={selected}
          />
        )}
      </div>
      <div>
        <div className="flex justify-between mt-16 mb-8">
          <PrevButton onClick={onPrev} />
          <NextButton onClick={() => onNext(selected)} />
        </div>
      </div>
    </div>
  );
};

export default Plan;
