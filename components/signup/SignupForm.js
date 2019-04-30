import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid, Header, Select, Input, Checkbox, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const styles = {
  Column: {
    background: 'white',
    padding: '45px 20px',
    margin: '2% 0px',
    paddingBottom: '15px'
  },
  Link: {
    color: '#e84671'
  },
  Form: {
    padding: '5px 25px'
  },
  FormInput: {
    margin: '10px 0px',
    marginBottom: '30px'
  },
  Header: {
  },
  SubHeader: {
    marginTop: '10px',
  },
  Select: {
    height: '53px',
    borderRadius: '0px',
    borderColor: '#C4CDD5',
    paddingTop: '18px'
  },
  Checkbox: {
    paddingTop: '3px',
    marginRight: '10px'
  },
  Button: {
    height: '60px',
    width: '126px'
  },
  accept: {
    margin: '2em 0em'
  }
}

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

    setFormErrors(_formErrors)

    console.log(signupFormData, formErrors)

    // CALL API WITH signupFormData
  }

  const [ formErrors, setFormErrors ] = useState({})

  const [signupFormData, setSignupData] = useState({
    fullname: '',
    email: '',
    address: '',
    mobileNumber: '',
    password: '',
    referral: '',
    accept: false
  });

  useEffect(() => {
    let store = null
    if (store = JSON.parse(localStorage.getItem('store'))) {
      if (store.auth) {
        setSignupData(store.auth.signup)
      }

    }
  }, [])

  return (
    <Grid className="signupForm" columns={2} centered>
      <Grid.Row>
        <Grid.Column width="7" style={styles.Column}>
          <Header style={styles.Header} textAlign="center" as='h1'>
            Sign up
            <Header.Subheader style={styles.SubHeader}>
              Already have an account? {' '}
              <Link href="/login">
                <a style={styles.Link}>Log in</a>
              </Link>
            </Header.Subheader>
          </Header>
          <form style={styles.Form}>
            <Input
              onChange={(e) => handleChange(e, 'fullname')}
              error={formErrors['fullname']}
              value={signupFormData.fullname}
              style={styles.FormInput}
              size="huge"
              placeholder='Full Name'
              fluid
            />
            <Input
              type="email"
              error={formErrors['email']}
              onChange={(e) => handleChange(e, 'email')}
              value={signupFormData.email}
              style={styles.FormInput}
              size="huge"
              placeholder='Email address'
              fluid
            />
            <Input
              type="number"
              error={formErrors['mobileNumber']}
              onChange={(e) => handleChange(e, 'mobileNumber')}
              value={signupFormData.mobileNumber}
              style={styles.FormInput}
              size="huge"
              placeholder='Mobile number'
              fluid
            />
            <Input
              type="password"
              error={formErrors['password']}
              onChange={(e) => handleChange(e, 'password')}
              value={signupFormData.password}
              style={styles.FormInput}
              size="huge"CharacterData
              placeholder='Password'
              fluid
            />
            <Select
              error={formErrors['referral']}
              onChange={(e, data) => handleChange(e, 'referral', data)}
              style={styles.Select}
              value={signupFormData.referral}
              fluid
              options={options}
              placeholder='How did you hear about Glamour on Demand?'
            />
            <div className="is-flex" style={styles.accept}>
              <Checkbox
                checked={signupFormData.accept}
                style={styles.Checkbox}
                onChange={(e, data) => handleChange(e, 'accept', data)}
              />
              <span>
                Yes, I accept the
                <Link href="/termsandconditions">
                  <a style={styles.Link}>{' '}Terms and Conditions{' '}</a>
                </Link>
                of Glamour on Demand
              </span>
            </div>
            <div className="is-v-centered">
              <Button
                onClick={submit}
                style={styles.Button}
                size="large"
                content='Sign up'
                secondary />
              <p>
                Are you a service provider?
                {' '}
                <Link href="/">
                  <a style={styles.Link}>Get started</a>
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