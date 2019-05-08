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

// import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Steps, { Step } from 'rc-steps';


// const description = <div>name olawale</div>


// const SignUp = () => {
//   return (
//   <Steps direction="vertical" current={3}>
//     <Step title="oo" description='one' />
//     <Step title="ww" description='two' />
//     <Step title="rr" description='three' />
//     <Step title="ff" description='four' />
//   </Steps>
//   );
// }

// export default withMasterLayout(SignUp);
