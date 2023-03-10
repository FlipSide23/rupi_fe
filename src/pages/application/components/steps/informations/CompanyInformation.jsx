import TextField from '../../elements/TextField';
import SelectTextField from '../../elements/SelectTextField';
import ChooseFileField from '../../elements/ChooseFileField';

import {
  FaRegEnvelope,
  FaSearchLocation,
  FaPhoneAlt,
  FaRegUser,
  FaNetworkWired,
  FaBuilding,
  FaLink,
} from 'react-icons/fa';

const CompanyInformation = () => {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-lg font-semibold my-2">
          Company Information
        </h1>
        <p className="text-sm">Tell us about your company</p>
      </div>
      <div className="mb-16">
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Company Name"
            hint="Enter your the name here"
            suffix={<FaBuilding />}
          />
          <TextField
            label="Company Location"
            hint="Kigali, Rwanda"
            suffix={<FaSearchLocation />}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Company Email address"
            hint="Enter your email address here"
            suffix={<FaRegEnvelope />}
          />
          <SelectTextField
            label="Years of Experience"
            hint="10"
            options={[
              { value: '20', label: '> 10 years' },
              { value: '10', label: '6-10 years' },
              { value: '5', label: '3-5 years' },
              { value: '2', label: '1-2 years' },
              { value: '1', label: '< 1 year' },
            ]}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <SelectTextField
            label="Staff Size"
            hint="1 - 5"
            options={[
              { value: '1', label: '1-5' },
              { value: '2', label: '5-15' },
              { value: '3', label: '16-30' },
              { value: '4', label: '31-50' },
              { value: '5', label: '51-100' },
              { value: '6', label: 'Greater than 100' },
            ]}
          />
          <SelectTextField
            label="Number of Completed Projects"
            hint="45"
            options={[
              { value: '1', label: '1-5' },
              { value: '2', label: '5-15' },
              { value: '3', label: '16-30' },
              { value: '4', label: '31-50' },
              { value: '5', label: '51-100' },
              { value: '6', label: '> 100' },
            ]}
          />
        </div>
      </div>
      <div className="mb-12">
        <h1 className="text-lg font-semibold my-2">Recent Project</h1>
        <p className="text-sm">
          Show us your most recent or best project
        </p>
      </div>
      <div className="mb-16">
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Paste your Project Link"
            hint="therockassociates.com"
            suffix={<FaLink />}
          />
          <div className="mt-3.5 flex items-center text-xs px-4 md:px-0 my-4 flex-row md:flex-col md:space-y-2">
            <div className="h-[1px] w-full md:h-full md:w-[1px] bg-slate-300 rounded-full mx-2 md:mx-0"></div>
            <span>Or</span>
            <div className="h-[1px] w-full md:h-full md:w-[1px] bg-slate-300 rounded-full mx-2"></div>
          </div>
          <ChooseFileField label="Upload your project files" />
        </div>
      </div>
      <div className="mb-12">
        <h1 className="text-lg font-semibold my-2">
          Company???s CEO Information
        </h1>
        <p className="text-sm">
          Information about your company???s managing director or owner
        </p>
      </div>
      <div className="mb-16">
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Names"
            hint="Enter the names here"
            suffix={<FaRegUser />}
          />
          <TextField
            label="Position in your Company"
            hint="Enter the position here"
            suffix={<FaNetworkWired />}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Email address"
            hint="Enter your email address here"
            suffix={<FaRegEnvelope />}
          />
          <TextField
            label="Phone Number"
            hint="+250 788 6385 773"
            suffix={<FaPhoneAlt />}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
