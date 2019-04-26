import React from 'react';
import Auth from '../components/shared/Auth';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import Form from '../components/signup/SignupForm';

const SignUp = () => {
  return (
    <Auth>
      <Form />
    </Auth>
  );
}

export default withMasterLayout(SignUp);