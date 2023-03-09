import React from 'react';
import Layout from '../components/Layout/Layout';
import { Subscribe } from '../components/Home/Subscribe/Subscribe';
import { Partners } from '../components/Home/Partners/Partners';
import { Count } from '../components/Home/Count/Count';
import { Why } from '../components/Home/Why/Why';
import { MembershipFees } from '../components/Home/MembershipFees/MembershipFees';

export const Home = () => {
  return (
    <Layout>
      <MembershipFees />
      <Why />
      <Count />
      <Partners />
      <Subscribe />
    </Layout>
  );
};
