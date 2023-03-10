import { NavLink } from 'react-router-dom';
import success from '../../../../assets/images/application/success.svg';

const Completed = ({ onPrev }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:w-1/2 mx-auto my-10 text-center">
        <img src={success} alt="Filling info success" />
        <h1 className="font-semibold text-lg mt-4">
          Thank you for applying for RUPI membership
        </h1>
        <p className="my-3 md:my-6 text-sm">
          Please review all the information you previously typed in
          the past steps, and if all is okay, proceed to payment. We
          will get in touch within the next 24 hours.
        </p>
        <NavLink
          to="/payment"
          className="bg-green text-white shadow-lg rounded-full px-4 py-2 text-xs hover:shadow-none"
        >
          Proceed to Payment
        </NavLink>
      </div>
      <div>
        <div className="flex justify-between mt-16 mb-8">
          <button
            className="text-blue border border-blue rounded-full px-6 py-2 hover:shadow-lg"
            onClick={onPrev}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Completed;
