import React, { useEffect, useState } from 'react'
import {Grid, Header, Select, Input, Checkbox, Button} from 'semantic-ui-react'
import Link from 'next/link';
import Password from '../../../components/shared/Password';
import './less/stepOne.less'


const options = [
  { key: '', text: 'Not Applicable', value: '' },
  { key: 'onilne', text: 'Online', value: 'Online' },
  { key: 'offline', text: 'Offline', value: 'offline' },
]

export default function StepOne(props) {
    
  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...signupFormData,
      [key]: e.target.value || value || checked || ''
    }
    setSignupData(newState)
    // props.updateSignupForm(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  const submit = (e) => {
    console.log(signupFormData)
    e.preventDefault();
    let  _formErrors = {};
    Object.keys(signupFormData).forEach((item) => {
      if (!signupFormData[item]) {
        _formErrors[item] = true
      }
    })

    setFormErrors(_formErrors)
    if (Object.keys(_formErrors).length === 0) {
      props.jump(signupFormData, 1)
    }

    // CALL API WITH signupFormData
  }


  const [ formErrors, setFormErrors ] = useState({})

  const [signupFormData, setSignupData] = useState({
    fullname: '',
    email: '',
    mobileNumber: '',
    password: '',
    referral: '',
    accept: false
  });

  // useEffect(() => {
  //   let store = null
  //   if (store = JSON.parse(localStorage.getItem('store'))) {
  //     if (store.auth) {
  //       setSignupData(store.auth.signup)
  //     }
  //   }
  // }, [])

  return (
    <div id="stepOne" className="stepOne">
      {/* <Grid  centered>
      <Grid.Row>
        <Grid.Column width={16}> */}
          <Header textAlign="center" as='h1'>
            Sign up
            <Header.Subheader className="mt-10">
              Already have an account? {' '}
              <Link href="/login">
                <a className="is-pink">Log in</a>
              </Link>
            </Header.Subheader>
          </Header>
          <form className="stepOne-form">
            <Input
              onChange={(e) => handleChange(e, 'fullname')}
              error={formErrors['fullname']}
              value={signupFormData.fullname}
              className="stepOne-form--input"
              size="huge"
              placeholder='Full Name'
              fluid
            />
            <Input
              type="email"
              error={formErrors['email']}
              onChange={(e) => handleChange(e, 'email')}
              value={signupFormData.email}
              className="stepOne-form--input"
              size="huge"
              placeholder='Email address'
              fluid
            />
            <Input
              type="number"
              error={formErrors['mobileNumber']}
              onChange={(e) => handleChange(e, 'mobileNumber')}
              value={signupFormData.mobileNumber}
              className="stepOne-form--input"
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
              className="stepOne-form--input"
              fluid
            />
            <Select
              error={formErrors['referral']}
              onChange={(e, data) => handleChange(e, 'referral', data)}
              className="stepOne-form--select signup-form--input"
              value={signupFormData.referral}
              fluid
              options={options}
              placeholder='How did you hear about Glamour on Demand?'
            />
            <div className="is-flex mt-10">
              <Checkbox
                className="stepOne-form--checkbox"
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
                {/* {props.children} */}
                <Button
                    className="mt-30 nxt-btn"
                    size="large"
                    onClick={submit}
                    secondary>
                    Next
                </Button>
            </div>

          </form>
        {/* </Grid.Column>
      </Grid.Row>
    </Grid> */}
    </div>
  )
}
