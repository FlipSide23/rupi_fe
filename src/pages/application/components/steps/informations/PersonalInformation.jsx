import TextField from '../../elements/TextField';
import SelectTextField from '../../elements/SelectTextField';
import ChooseFileField from '../../elements/ChooseFileField';

import {
  FaAward,
  FaCalendarAlt,
  FaHouseUser,
  FaIdCard,
  FaPhoneAlt,
  FaPodcast,
  FaRegEnvelope,
  FaRegUser,
  FaUniversity,
  FaUsers,
} from 'react-icons/fa';
import { countries } from '../../../data/countries';

const PersonalInformation = () => {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-lg font-semibold my-2">
          Personal Information
        </h1>
        <p className="text-sm">Tell us about you</p>
      </div>
      <div className="mb-16">
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="First Name"
            hint="Enter your first name here"
            suffix={<FaRegUser />}
          />
          <TextField
            label="Last Name"
            hint="Enter your last name here"
            suffix={<FaRegUser />}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <SelectTextField
            label="Gender"
            hint="Select gender"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
          />
          <TextField
            label="Email"
            hint="Enter your email address here"
            suffix={<FaRegEnvelope />}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Phone Number"
            hint="+250 788 6385 773"
            suffix={<FaPhoneAlt />}
          />
          <SelectTextField
            label="Nationality"
            hint="Rwanda"
            options={countries.map(country => ({
              value: country.name,
              label: country.name,
            }))}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="ID or Passport"
            hint="Enter your ID here"
            suffix={<FaIdCard />}
          />
          <TextField
            label="Date of Birth"
            hint="24-feb-2014"
            isDate={true}
            suffix={<FaCalendarAlt />}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Place of Birth"
            hint="Huye, Rwanda"
            suffix={<FaHouseUser />}
          />
          <TextField
            label="Place of Residence"
            hint="Kigali, Rwanda"
            suffix={<FaHouseUser />}
          />
        </div>
      </div>
      <div className="mb-12">
        <h1 className="text-lg font-semibold my-2">Education</h1>
        <p className="text-sm">
          Let’s talk about your academic achievements
        </p>
      </div>
      <div className="mb-16">
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <SelectTextField
            label="Level of Education"
            hint="Bachelors degree"
            options={[
              { value: 'bachelor', label: 'Bachelor' },
              { value: 'secondary', label: 'High school' },
            ]}
          />
          <TextField
            label="Field of specialization"
            hint="Enter the field name here"
            suffix={<FaAward />}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <SelectTextField
            label="Year of Graduation"
            hint="2017"
            options={[
              { value: '2017', label: '2017' },
              { value: '2016', label: '2016' },
              { value: '2015', label: '2015' },
              { value: '2014', label: '2014' },
              { value: '2013', label: '2013' },
            ]}
          />
          <ChooseFileField label="Diplomes and Certificates" />
        </div>
      </div>
      <div className="mb-2">
        <h1 className="text-lg font-semibold">Motivational Letter</h1>
      </div>
      <div className="mb-16">
        <ChooseFileField
          label={
            'Write a motivational letter addressed to the CEO of RUPI'
          }
        />
      </div>
      <div className="mb-2">
        <h1 className="text-lg font-semibold">CV</h1>
      </div>
      <div className="mb-16">
        <ChooseFileField label={'Upload your resume'} />
      </div>
      <div className="mb-12">
        <h1 className="text-lg font-semibold my-2">
          Professional referee
        </h1>
        <p className="text-sm">
          Someone who can confirm that the above provided information
          is true
        </p>
      </div>
      <div className="mb-12">
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Names"
            hint="Enter the names here"
            suffix={<FaRegUser />}
          />
          <TextField
            label="Institution"
            hint="Enter the institution here"
            suffix={<FaUniversity />}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Position"
            hint="Enter the position here"
            suffix={<FaPodcast />}
          />
          <TextField
            label="Email"
            hint="Enter the email address here"
            suffix={<FaRegEnvelope />}
          />
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row">
          <TextField
            label="Phone Number"
            hint="Enter the phone number here"
            suffix={<FaPhoneAlt />}
          />
          <TextField
            label="What is your relationship with this person?"
            hint="My managing director"
            suffix={<FaUsers />}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
