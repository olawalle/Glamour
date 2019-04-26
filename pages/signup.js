import React from 'react';
import Auth from '../components/shared/Auth';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import SignupForm from '../components/signup/SignupForm';

const SignUp = () => {
  return (
    <Auth>
      <SignupForm />
    </Auth>
  );
}

export default withMasterLayout(SignUp);