import React from 'react';
import Auth from '../components/shared/Auth';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import ForgotPasswordForm from '../components/Forgotpassword/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <Auth>
      <ForgotPasswordForm />
    </Auth>
  );
}

export default withMasterLayout(ForgotPassword);