import React from 'react';
import Auth from '../../components/shared/Auth';
import withMasterLayout from '../../pages/layouts/withMasterLayout';
import ForgotPasswordCreateForm from '../../components/forgotpassword/ForgotPasswordCreateForm';

const ForgotPassword = () => {
  return (
    <Auth>
      <ForgotPasswordCreateForm />
    </Auth>
  );
}

export default withMasterLayout(ForgotPassword);