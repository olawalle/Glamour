import React, { useEffect, useState } from 'react'
import {Grid, Header, Select, Input, Checkbox, Button, TextArea} from 'semantic-ui-react'
import './less/stepOne.less'
import SelectedServices from '../../../components/shared/SelectServices';


export default function StepThree(props) {
    
  
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
  return (
    <div id="stepOne" className="stepOne stepThree">
      <Header textAlign="center" className="header" as='h1'>
        Complete profile
      </Header>
        <Grid centered>
        <p className="sectHeading">
        Select the services you offer
        </p>
          <SelectedServices />
          <div className="txt-wrap">
            <p className="sectHeading">
            Add a brief description of your business
            </p>
            <TextArea rows="10" className="textArea" />
            {
              props.children
            }
          </div>
        </Grid>
    </div>
  )
}
