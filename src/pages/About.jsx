import React from 'react';
import AboutHeader from '../components/About/AboutHeader';
import Background from '../components/About/Background';
import OurMission from '../components/About/OurMission';
import Layout from '../components/Layout/Layout';
import OurValues from '../components/About/OurValues';
import OurTeam from '../components/About/OurTeam';
import OurJourney from '../components/About/OurJourney';

export const About = () => {
  return (
    <>
      <AboutHeader />
      <Background />
      <OurMission />
      <OurValues />
      <OurTeam />
      <OurJourney />
    </>
  );
};
