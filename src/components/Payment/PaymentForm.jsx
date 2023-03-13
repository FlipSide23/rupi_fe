import React from 'react';
import Cards from 'react-credit-cards-2';
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

  const [state, setState] = React.useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
    month: '',
    year: '',
  });

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = evt => {
    setState(prev => ({ ...prev, focus: evt.target.name }));
  };

  const handleCallback = ({ issuer, maxLength }, isValid) => {
    console.log(issuer, isValid);
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

          <label
            htmlFor="name-on-card"
            className="flex relative w-full mt-6 md:mt-12"
          >
            <input
              className="rounded-lg border border-gray-402 bg-white peer px-3 py-2 focus:border-brand-green w-full focus:placeholder-transparent focus:outline-none bg-transparent"
              placeholder="Name on card"
              id="name-on-card"
              type="text"
              name="name"
              autocomplete="off"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <span className="peer-focus:block text-xs peer-placeholder-shown:hidden text-brand-green left-3 -top-2 bg-white transition-all absolute">
              Name on card
            </span>
          </label>

          <label
            htmlFor="card-number"
            className="flex relative w-full mt-4"
          >
            <input
              className="rounded-lg border border-gray-402 bg-white peer px-3 py-2 focus:border-brand-green w-full focus:placeholder-transparent focus:outline-none bg-transparent"
              placeholder="Card Number"
              id="card-number"
              type="number"
              name="number"
              autocomplete="off"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <span className="peer-focus:block text-xs peer-placeholder-shown:hidden text-brand-green left-3 -top-2 bg-white transition-all absolute">
              Card Number
            </span>
          </label>

          <div className="flex space-x-4 mt-4">
            <label htmlFor="month" className="flex relative w-full">
              <input
                className="rounded-lg border border-gray-402 bg-white peer px-3 py-2 focus:border-brand-green w-full focus:placeholder-transparent focus:outline-none bg-transparent"
                placeholder="Month"
                id="month"
                type="number"
                name="month"
                autocomplete="off"
                value={state.month}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <span className="peer-focus:block text-xs peer-placeholder-shown:hidden text-brand-green left-3 -top-2 bg-white transition-all absolute">
                Month
              </span>
            </label>
            <label htmlFor="year" className="flex relative w-full">
              <input
                className="rounded-lg border border-gray-402 bg-white peer px-3 py-2 focus:border-brand-green w-full focus:placeholder-transparent focus:outline-none bg-transparent"
                placeholder="Year"
                id="year"
                type="number"
                name="year"
                autocomplete="off"
                value={state.year}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <span className="peer-focus:block text-xs peer-placeholder-shown:hidden text-brand-green left-3 -top-2 bg-white transition-all absolute">
                Year
              </span>
            </label>
            <label htmlFor="cvv" className="flex relative w-full">
              <input
                className="rounded-lg border border-gray-402 bg-white peer px-3 py-2 focus:border-brand-green w-full focus:placeholder-transparent focus:outline-none bg-transparent"
                placeholder="CVV"
                id="cvv"
                type="number"
                name="cvv"
                autocomplete="off"
                value={state.cvv}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <span className="peer-focus:block text-xs peer-placeholder-shown:hidden text-brand-green left-3 -top-2 bg-white transition-all absolute">
                CVV
              </span>
            </label>
          </div>

          <div className="md:hidden px-8 mt-8">
            <FormActions />
          </div>

          <div className="hidden">
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
              acceptedCards={['visa', 'mastercard']}
              callback={handleCallback}
            />
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
