import React, { useEffect, useState } from 'react'
import {Grid, Header, Select, Input, Checkbox, Button} from 'semantic-ui-react'
import Link from 'next/link';
import Password from '../../../components/shared/Password';
import './less/stepOne.less'
import Timing from '../../../components/shared/Timing';


export default function StepTwo(props) {
    
  const options = [
    { key: '', text: 'Not Applicable', value: '' },
    { key: 'onilne', text: 'Online', value: 'Online' },
    { key: 'offline', text: 'Offline', value: 'offline' },
  ]
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
    <div id="stepOne" className="stepOne">
      {/* <Grid columns>
      <Grid.Row>
        <Grid.Column width={16}> */}
          <Header textAlign="center" className="header" as='h1'>
          Set coverage & availability
          </Header>
          <form className="stepOne-form">
            <p className="sectHeading">
                Coverage area
            </p>
            <Input
              onChange={(e) => handleChange(e, 'fullname')}
              error={formErrors['fullname']}
              value={signupFormData.fullname}
              className="stepOne-form--input"
              size="huge"
              placeholder='Postcode'
              fluid
            />
            <Select
              error={formErrors['referral']}
              onChange={(e, data) => handleChange(e, 'referral', data)}
              className="stepOne-form--select signup-form--input"
              value={signupFormData.referral}
              fluid
              options={options}
              placeholder='Within mile radius'
            />
            <div className="is-flex checkboxWrap">
              <Checkbox
                className="stepOne-form--checkbox"
                onChange={(e, data) => handleChange(e, 'accept', data)}
              />
              <span className="caveat">
                <b>Use my location.</b> This enables us to match you effectively to nearby clients
              </span>
            </div>
            
            <p className="sectHeading_">
                Availability
            </p>

            <Grid columns className='timingWrap'>
              <Timing />
            </Grid>
            <div className="is-v-centered">
                {props.children}
            </div>

          </form>
        {/* </Grid.Column>
      </Grid.Row>
    </Grid> */}
    </div>
  )
}
