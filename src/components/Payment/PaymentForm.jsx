import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import masterCard from '../../assets/images/pay/master-card.png';
import semiVisaCard from '../../assets/images/pay/semi-visa-card.png';
import FormActions from './FormActions';

const PaymentForm = () => {
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

          <input
            type="text"
            placeholder="Card name"
            className="w-full rounded-lg border border-gray-402 p-2 mt-6 md:mt-12"
          />
          <input
            type="text"
            placeholder="Card number"
            className="w-full rounded-lg border border-gray-402 p-2"
          />
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

export default PaymentForm;
