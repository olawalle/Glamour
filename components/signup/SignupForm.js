import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid, Header, Select, Input, Checkbox, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import {clientRegister} from '../../services/signup.ts'
import Password from '../../components/shared/Password';
import Router from 'next/router';
import './less/signupForm.less';

const options = [
  { key: '', text: 'Not Applicable', value: '' },
  { key: 'onilne', text: 'Online', value: 'Online' },
  { key: 'offline', text: 'Offline', value: 'offline' },
]


const SignupForm = (props) => {

  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...signupFormData,
      [key]: e.target.value || value || checked || ''
    }
    setSignupData(newState)
    props.updateSignupForm(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  const submit = (e) => {
    e.preventDefault();
    let  _formErrors = {};
    Object.keys(signupFormData).forEach((item) => {
      if (!signupFormData[item]) {
        _formErrors[item] = true
      }
    })

    console.log(_formErrors)

    setFormErrors(_formErrors)

    // CALL API WITH signupFormData
    if (Object.keys(_formErrors).length <= 0) {
      // let form = new FormData()
      let data = {
        fullnames: signupFormData.fullname,
        email: signupFormData.email,
        password: signupFormData.password,
        phone: signupFormData.mobileNumber,
        meta: 'nothing here'
      }
      clientRegister(data)
      .then(res => {
        console.log(res)
        Router.push('/login')
        // return <Snackbar message={res.data.message} actionText="dismiss" />
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  const [ formErrors, setFormErrors ] = useState({})

  const [signupFormData, setSignupData] = useState({
    fullname: '',
    email: '',
    mobileNumber: '',
    password: '',
    referral: '',
    accept: ''
  });

  useEffect(() => {
    // console.log(formErrors)
    let store = null
    if (store = JSON.parse(localStorage.getItem('store'))) {
      if (store.auth) {
        setSignupData(store.auth.signup)
      }

    }
  }, [])

  return (
    <Grid id="signup" className="signup" columns={2} centered>
      <Grid.Row>
        <Grid.Column mobile={14} tablet={11} computer={9} largeScreen={8} widescreen={5}>
          <Header textAlign="center" as='h1'>
            Sign up
            <Header.Subheader className="mt-10">
              Already have an account? {' '}
              <Link href="/login">
                <a className="is-pink">Log in</a>
              </Link>
            </Header.Subheader>
          </Header>
          <form className="signup-form">
            <Input
              onChange={(e) => handleChange(e, 'fullname')}
              error={formErrors['fullname']}
              value={signupFormData.fullname}
              className="signup-form--input"
              size="huge"
              placeholder='Full Name'
              fluid
            />
            <Input
              type="email"
              error={formErrors['email']}
              onChange={(e) => handleChange(e, 'email')}
              value={signupFormData.email}
              className="signup-form--input"
              size="huge"
              placeholder='Email address'
              fluid
            />
            <Input
              type="number"
              error={formErrors['mobileNumber']}
              onChange={(e) => handleChange(e, 'mobileNumber')}
              value={signupFormData.mobileNumber}
              className="signup-form--input"
              size="huge"
              placeholder='Mobile number'
              fluid
            />
            <Password
              formerror={formErrors['password']}
              handlechange={(e) => handleChange(e, 'password')}
              password={signupFormData.password}
              size="huge"
              placeholder='Password'
              className="signup-form--input"
              fluid
            />
            <Select
              error={formErrors['referral']}
              onChange={(e, data) => handleChange(e, 'referral', data)}
              className="signup-form--select signup-form--input"
              value={signupFormData.referral}
              fluid
              options={options}
              placeholder='How did you hear about Glamour on Demand?'
            />
            <div className="is-flex">
              <Checkbox
                className="signup-form--checkbox"
                error={formErrors['accept']}
                onChange={(e, data) => handleChange(e, 'accept', data)}
              />
              <span>
                Yes, I accept the
                <Link href="/termsandconditions">
                  <a className="is-pink">{' '}Terms and Conditions{' '}</a>
                </Link>
                of Glamour on Demand
              </span>
            </div>
            <div className="is-v-centered">
              <Button
                onClick={submit}
                className="mt-30"
                size="large"
                content='Sign up'
                secondary />
              <p>
                Are you a service provider?
                {' '}
                <Link href="/">
                  <a className="is-pink">Get started</a>
                </Link>
              </p>
            </div>

          </form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    signup: state.auth.signup
  }
}

export default connect(mapStateToProps, actions)(SignupForm);