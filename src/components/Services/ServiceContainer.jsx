import React from 'react';
import ServiceCardList from './ServiceCardList';
import bg from '../../assets/images/services/bg-service.svg';

const ServiceContainer = () => {
  return (
    <div
      className="flex flex-col items-center w-full bg-no-repeat bg-cover bg-right-bottom p-8 py-6 md:py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col max-w-6xl mx-auto">
        <ServiceCardList />
      </div>
    </div>
  );
};

export default ServiceContainer;
