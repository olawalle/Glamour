import React, { useEffect, useState } from 'react'
import {Grid, Header, Select, Input, Checkbox, Button} from 'semantic-ui-react'
import Link from 'next/link';
import Password from '../../../components/shared/Password';
import './less/stepOne.less'
import Timing from '../../../components/shared/Timing';


export default function StepTwo(props) {
    
  const options = [
    // { key: '', text: 'Not Applicable', value: '' },
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

    console.log(signupFormData, _formErrors)
    if (Object.keys(_formErrors).length === 0) {
      console.log(timing)
      props.jump( {...signupFormData, schedule: timing }, 2)
    }
  }
  
  const [timing, setTiming] = useState([])
  const getTiming_ = (e) => {
    setTiming(e)
    console.log(e, timing)
  }

  const [ formErrors, setFormErrors ] = useState({})
  const [signupFormData, setSignupData] = useState({
    postCode: '',
    mileRadius: '',
    location: false
  });

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
              onChange={(e) => handleChange(e, 'postCode')}
              error={formErrors['postCode']}
              value={signupFormData.postCode}
              className="stepOne-form--input"
              size="huge"
              placeholder='Postcode'
              fluid
            />
            <Select
              error={formErrors['mileRadius']}
              onChange={(e, data) => handleChange(e, 'mileRadius', data)}
              className="stepOne-form--select signup-form--input"
              value={signupFormData.mileRadius}
              fluid
              options={options}
              placeholder='Within mile radius'
            />
            <div className="is-flex checkboxWrap">
              <Checkbox
                className="stepOne-form--checkbox"
                onChange={(e, data) => handleChange(e, 'location', data)}
              />
              <span className="caveat">
                <b>Use my location.</b> This enables us to match you effectively to nearby clients
              </span>
            </div>
            
            <p className="sectHeading_">
                Availability
            </p>

            <Grid columns className='timingWrap'>
              <Timing getTiming={getTiming_} />
            </Grid>
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
