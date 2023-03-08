import React from 'react';
import Layout from '../components/Layout';
import { Subscribe } from '../components/Home/Subscribe/index.';
import { Partners } from '../components/Home/Partners';
import { Count } from '../components/Home/Count';
import { Why } from '../components/Home/Why';

export const Home = () => {
  return (
    <Layout>
      <Why />
      <Count />
      <Partners />
      <Subscribe />
    </Layout>
  );
};
