import { useState } from 'react';
import { FaUser, FaUsers } from 'react-icons/fa';

const MembershipCategory = ({ onNext, membership }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    membership ?? 'individual',
  );

  return (
    <div>
      <h1 className="font-semibold mt-12">Membership Category</h1>
      <p className="text-grey-601 my-2">
        Choose the category of membership you are applying for to
        proceed
      </p>
      <div>
        <div className="flex sm:space-x-12 mt-4 sm:mt-8 flex-col sm:flex-row justify-center md:justify-start">
          <div
            className={`shadow-lg py-4 px-6 rounded-lg flex items-center space-x-3 cursor-pointer my-4 ${
              selectedCategory == 'individual'
                ? 'border border-green'
                : 'shadow-lg'
            }`}
            onClick={() => setSelectedCategory('individual')}
          >
            <div className="text-sm bg-blue text-white px-2 py-2 rounded-full">
              <FaUser />
            </div>

            <span>Individual</span>
          </div>
          <div
            className={`py-4 px-6 rounded-lg flex items-center space-x-3 cursor-pointer my-4 ${
              selectedCategory == 'company'
                ? 'border border-green'
                : 'shadow-lg'
            }`}
            onClick={() => setSelectedCategory('company')}
          >
            <div className="text-sm bg-blue text-white px-2 py-2 rounded-full">
              <FaUsers />
            </div>

            <span>Company</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-16 mb-8">
        <button
          className="text-white bg-blue rounded-full px-6 py-2 hover:shadow-lg"
          onClick={() => onNext(selectedCategory)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MembershipCategory;
