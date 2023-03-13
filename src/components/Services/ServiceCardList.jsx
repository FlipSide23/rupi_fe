import React from 'react';
import { availableServices } from './data/service';
import ServiceCard from './ServiceCard';

const ServiceCardList = () => {
  return (
    <div className="grid gap-10 md:gap-16 sm:grid-cols-2 lg:grid-cols-3">
      {availableServices.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceCardList;
