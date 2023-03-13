import { FaCheck, FaTimes } from 'react-icons/fa';
export const pricingData = [
  {
    price: '$5',
    title: 'JUNIOR',
    features: [
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
    ],
  },
  {
    price: '$25',
    title: 'COORPORATE',
    features: [
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
    ],
  },
  {
    price: '$250',
    title: 'FELLOW',
    features: [
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
    ],
  },
];

export const companyPricingData = [
  {
    price: '$5',
    title: 'MONTHLY',
    features: [
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
    ],
  },
  {
    price: '$25',
    title: 'YEARLY',
    features: [
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaCheck />,
        text: 'Lorem ipsum',
        active: true,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
      {
        icon: <FaTimes />,
        text: 'Lorem ipsum',
        active: false,
      },
    ],
  },
];

export const defaultPlans = {
  individual: 'JUNIOR',
  company: 'MONTHLY',
};
