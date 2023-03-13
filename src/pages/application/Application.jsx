import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Completed from './components/steps/Completed';
import Informations from './components/steps/informations/Informations';
import MembershipCategory from './components/steps/MembershipCategory';
import Plan from './components/steps/plan/Plan';

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMembership, setSelectedMembership] = useState();
  const [plan, setPlan] = useState();

  const switchSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <MembershipCategory
            membership={selectedMembership}
            onNext={selected => {
              if (selected != selectedMembership) {
                setPlan(undefined);
              }
              setSelectedMembership(selected);
              setCurrentStep(2);
            }}
          />
        );
      case 2:
        return (
          <Plan
            onPrev={() => setCurrentStep(1)}
            membership={selectedMembership}
            plan={plan}
            onNext={data => {
              console.log(data);
              setPlan(data);
              setCurrentStep(3);
            }}
          />
        );
      case 3:
        return (
          <Informations
            onPrev={() => setCurrentStep(2)}
            membership={selectedMembership}
            onNext={data => {
              setCurrentStep(4);
            }}
          />
        );
      case 4:
        return <Completed onPrev={() => setCurrentStep(3)} />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-8 md:mx-24 my-8">
      <div className="text-center">
        <h1 className="text-xl font-semibold">
          Apply for membership at RUPI
        </h1>
        <p className="text-grey-601 my-2">
          Welcome to RUPI membership application form. This could be
          the start of something big...
        </p>
      </div>
      <div className="border-2 border-slate-200 rounded-3xl px-8 md:px-24 py-6 mt-12">
        <div className="flex border-slate-200 pl-3">
          {[1, 2, 3, 4].map(step => {
            return (
              <div
                key={step}
                className={`flex items-center ${
                  step !== 4 ? 'w-full' : ''
                }`}
              >
                <div
                  className={`${
                    currentStep === step
                      ? currentStep == 4
                        ? 'bg-green text-white py-2 px-[8px]'
                        : 'bg-blue text-white'
                      : currentStep > step
                      ? 'bg-green text-white py-2 px-[8px]'
                      : 'bg-slate-200'
                  } rounded-full p-1 px-3 text-grey-601`}
                >
                  {currentStep > step || currentStep == 4 ? (
                    <FaCheck />
                  ) : (
                    step
                  )}
                </div>

                <div className="w-full h-1 rounded-full bg-slate-200 mx-2">
                  {currentStep === step && (
                    <div className="h-full w-1/2 bg-blue rounded-full"></div>
                  )}
                  {currentStep > step && (
                    <div className="h-full w-full bg-green rounded-full"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-8">
          <div className="w-full h-[1px] bg-slate-200 my-6"></div>
        </div>

        <div>{switchSteps()}</div>
      </div>
    </div>
  );
};

export default Application;
