import React from 'react';
import Auth from '../../components/shared/Auth';
import withMasterLayout from '../../pages/layouts/withMasterLayout';
import ForgotPasswordResetForm from '../../components/forgotpassword/ForgotPasswordResetForm';

const ForgotPassword = () => {
  return (
    <Auth>
      <ForgotPasswordResetForm />
    </Auth>
  );
}

export default withMasterLayout(ForgotPassword);