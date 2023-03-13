import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaChevronLeft,
  FaEllipsisV,
  FaEdit,
  FaTrash,
  FaPlus,
} from 'react-icons/fa';
import masterCard from '../../assets/images/pay/master-card.png';
import semiVisaCard from '../../assets/images/pay/semi-visa-card.png';
import FormActions from './FormActions';
import { paymentMethods } from './data/payment';
import ClickOutside from '../../lib/click-outside/click-outside';

const SelectPaymentForm = () => {
  const [display, setDisplay] = React.useState(false);
  const [currentPayment, setCurrentPayment] = React.useState(
    paymentMethods[0],
  );
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col py-8 md:py-12 max-w-6xl ml-auto w-full overflow-x-hidden">
      <button
        onClick={onBack}
        className="mx-8 flex items-center space-x-1 font-bold text-[#060405]"
      >
        <FaChevronLeft /> <span>Back</span>
      </button>
      <form className="grid md:grid-cols-2 mt-6 md:mt-12">
        <div className="flex flex-col px-8">
          <h1 className="">
            Balance:{' '}
            <span className="font-black text-black">$250</span>
          </h1>

          <div className="flex relative w-full mt-6 md:mt-12 flex-col space-y-3 max-w-sm">
            {paymentMethods.map(paymentMethod => {
              const isCurrent = paymentMethod === currentPayment;
              const isDisplay = isCurrent && display;
              return (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setCurrentPayment(paymentMethod)}
                  className={`p-3 rounded-lg border flex items-center space-x-2 ${
                    isCurrent
                      ? 'border-brand-green'
                      : 'border-gray-200'
                  }`}
                >
                  {paymentMethod.icon}
                  <p className="flex-grow">
                    {paymentMethod.cardNumber}
                  </p>
                  <p className="">{paymentMethod.cvv}</p>
                  <ClickOutside
                    onClick={() => setDisplay(false)}
                    active={isDisplay}
                  >
                    <div className="relative">
                      <button
                        type="button"
                        onKeyDown={() => setDisplay(!display)}
                        onClick={() => setDisplay(!display)}
                        className="ml-4"
                      >
                        <FaEllipsisV />
                      </button>
                      {isDisplay ? (
                        <div className="flex divide-y flex-col top-8 z-10 absolute right-0 border-gray-200 border bg-white rounded shadow-xl">
                          <button
                            type="button"
                            className="py-2 px-4 flex items-center space-x-2"
                          >
                            <FaEdit /> <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            className="py-2 px-4 flex items-center space-x-2"
                          >
                            <FaTrash /> <span>Delete</span>
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </ClickOutside>
                </div>
              );
            })}

            <button
              type="button"
              className="flex justify-center text-soft-black space-x-3 items-center rounded-lg border border-gray-402 py-3 px-12 uppercase text-sm font-semibold mt-8 md:mt-12"
            >
              <FaPlus /> <span>Add new card</span>
            </button>
          </div>

          <div className="md:hidden px-8 mt-8">
            <FormActions />
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-end items-end">
          <div className="relative flex space-x-10 py-12">
            <img
              src={masterCard}
              alt="Visa card"
              className=""
              width={354}
              height={223}
            />
            <img
              src={semiVisaCard}
              alt="semiVisaCard card"
              className=""
              width={90}
              height={223}
            />
            <div className="w-full h-full top-0 absolute flex-grow" />
          </div>
          <div className="w-full flex flex-col items-center">
            <FormActions />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectPaymentForm;
