import React from 'react';
import Auth from '../components/shared/Auth';
import SingleProvider from '../components/\/singleProvider/singleProvider'
import withMasterLayout from '../pages/layouts/withMasterLayout';

const ServiceProvider = () => {
  return (
    <SingleProvider />
  );
}

export default withMasterLayout(ServiceProvider);