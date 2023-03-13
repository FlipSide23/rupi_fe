import React from 'react';
import AboutHeader from '../components/About/AboutHeader';
import ServiceContainer from '../components/Services/ServiceContainer';

export const Services = () => {
  return (
    <>
      <AboutHeader
        title="Services"
        subTitle="RUPI Services"
        details="Learn more about services offered in RUPI "
      />
      <ServiceContainer />
    </>
  );
};
