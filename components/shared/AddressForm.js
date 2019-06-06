import React, { useState } from 'react'
import {Grid, Input, Button} from 'semantic-ui-react'
import './less/cardDetailsForm.less'

export default function AddressForm(props) {
  
  
  const [addressFormData, setAddressData] = useState({
    houseNo: '',
    streetNo: '',
    postCode: '',
    city: '',
    instructions: ''
  });
  
  const [ formErrors, setFormErrors ] = useState({})

  
  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...addressFormData,
      [key]: e.target.value || value || checked || ''
    }
    setAddressData(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  const submit = (e) => {
    e.preventDefault();
    let  _formErrors = {};
    Object.keys(addressFormData).forEach((item) => {
      if (!addressFormData[item]) {
        _formErrors[item] = true
      } else {
        // props.updateLoginForm({...addressFormData, isLoggedIn: true})
        // Router.push('/serviceproviders')
      }
    })
    setFormErrors(_formErrors)
    console.log(addressFormData, formErrors)
    props.formData(addressFormData)

    // CALL API WITH loginFormData
  }

  const validate = () => {

  }

  return (
    <>     
        <Grid.Row  className="inputWrap">
            <Grid.Column width={8}>
                <Input 
                    value={addressFormData.houseNo}
                    error={formErrors['houseNo']}
                    onChange={(e) => handleChange(e, 'houseNo')}
                    placeholder="House/Flat number"
                />
                <img src="/static/icons/grey-home.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input
                    value={addressFormData.streetNo}
                    error={formErrors['streetNo']}
                    onChange={(e) => handleChange(e, 'streetNo')}
                    placeholder="Street number"
                />
                <img src="/static/icons/grey-street-view.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input 
                    value={addressFormData.postCode}
                    error={formErrors['postCode']}
                    onChange={(e) => handleChange(e, 'postCode')}
                    placeholder="Post Code"
                />
                <img src="/static/icons/grey-map-marker.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input 
                    value={addressFormData.city}
                    error={formErrors['city']}
                    onChange={(e) => handleChange(e, 'city')}
                    placeholder="City"/>
                <img src="/static/icons/grey-city-hall.svg" className="inputImage" alt=""/>
            </Grid.Column>
            
            <Grid.Column width={16}>
                <Input
                    value={addressFormData.instructions}
                    error={formErrors['instructions']}
                    onChange={(e) => handleChange(e, 'instructions')}
                    placeholder="Instructions" />
                <img src="/static/icons/grey-compass.svg" className="inputImage" alt=""/>
            </Grid.Column>
        </Grid.Row>
        {/* <Button secondary className="proceedBtn" 
                onClick={submit}>
          <div> <img src='/static/icons/lock.svg' />  Validate</div>
        </Button> */}
    </>
  )
}
