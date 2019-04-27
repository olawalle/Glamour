import React from 'react';
import Auth from '../components/shared/Auth';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import LoginForm from '../components/login/LoginForm';

const SignUp = () => {
  return (
    <Auth>
      <LoginForm />
    </Auth>
  );
}

export default withMasterLayout(SignUp);