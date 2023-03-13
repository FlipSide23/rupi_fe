import MastercardIcon from '../../../assets/images/icons/svg/MastercardIcon';
import VisaIcon from '../../../assets/images/icons/svg/VisaIcon';

export const paymentMethods = [
  {
    name: 'Visa card',
    icon: <VisaIcon />,
    cvv: '3636',
    cardNumber: '**** **** ****',
  },
  {
    name: 'Master card',
    icon: <MastercardIcon />,
    cvv: '2424',
    cardNumber: '**** **** ****',
  },
];
