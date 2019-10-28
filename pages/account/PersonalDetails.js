import React,{ useState, useEffect } from 'react'
import { Grid, Input, TextArea, Button, Loader, Message } from 'semantic-ui-react';
import './less/personalDetails.less'
import * as actions from '../../store/actions'
import { connect } from 'react-redux';
import Password from '../../components/shared/Password';
import Display from '../../components/shared/Display';

import {updateClient, updateProvider, getCurrentUser, changePassword } from '../../services/auth.ts'
import { getUserAddresses } from '../../services/generatData.ts'

const PersonalDetails = (props) => {

  useEffect(() => {
    // setClientData({
    // })    
    // getUserAddresses()
    // .then(res => {
    //     props.saveUserAddresses(res.data.addresses)
    // })
    // .catch(err => {
    //   console.log(err)
    // })

  }, [])

  const [clientData, setClientData] = useState({
    fullname: props.user.fullname,
    phone: props.user.phone,
  });

  const [providerData, setProviderData] = useState({
    fullname: props.user.fullname,
    description: props.user.description,
    phone: props.user.phone
  })

  const [oldPwrd, setOld] = useState('')
  const [NewPrd, setNew] = useState('')
  const [message, updateMessage] = useState('')
  const [messageType, updatemessageType] = useState('')
  
  const [ formErrors, setFormErrors ] = useState({})
  
  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...clientData,
      [key]: e.target.value || value || checked || ''
    }
    setClientData(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }
  
  const handleChange_ = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...providerData,
      [key]: e.target.value || value || checked || ''
    }
    setProviderData(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  const updatePasswordOld = (e) => {
    setOld(e.target.value)
  }
 
  const updatePasswordNew = (e) => {
    setNew(e.target.value)
  }

  const changePwrd = () => {
    let data = {
      newpassword: NewPrd,
      oldpassword: oldPwrd
    }
    console.log(data)
    changePassword(data)
    .then(res => {
      // console.log(res)
      updatemessageType('success')
      updateMessage(res.data.message)
      setTimeout(() => {
        updatemessageType("")
      }, 10000);
    })
    .catch(err => {
      console.log({...err})
      updateMessage("An erro occured")
      updatemessageType("error")
      setTimeout(() => {
        updatemessageType("")
      }, 10000);
    })
  }


  
  const submit = (e) => {

    if (NewPrd !== "" || oldPwrd !== "") {
      changePwrd()
    }


    e.preventDefault();
    
    let  _formErrors = {};
    Object.keys(clientData).forEach((item) => {
      if (!clientData[item]) {
        _formErrors[item] = true
      }
    })
    setFormErrors(_formErrors)

    if (Object.keys(_formErrors).length === 0) {
      setupdating(true)
      updateClient(clientData)
      .then(res => {
        getCurrentUser()
        .then(resp => {
          props.saveUserData({
            ...resp.data.me,
            isLoggedIn: true
          })
        })
        setupdating(false)
      })
      .catch(err => {
        console.log(err)
        setupdating(false)
      })
    }
  }

  const submitProvider = (e) => {
    
    if (NewPrd !== "" || oldPwrd !== "") {
      changePwrd()
    }
    // let payload = {...props.user, ...providerData}
    // console.log(payload)
    e.preventDefault();
    
    let  _formErrors = {};
    Object.keys(providerData).forEach((item) => {
      if (!providerData[item]) {
        _formErrors[item] = true
      }
    })
    setFormErrors(_formErrors)

    if (Object.keys(_formErrors).length === 0) {
      // let form = new FormData()
      let data = {...props.user, ...providerData}
      // Object.keys(data).forEach(key => {
      //   form.append(key, data[key])
      // })
      setupdating(true)
      updateProvider(data)
      .then(res => {
        getCurrentUser()
        .then(resp => {
          props.saveUserData({
            ...resp.data.me,
            isLoggedIn: true
          })
        })
        setupdating(false)
      })
      .catch(err => {
        console.log(err)
        setupdating(false)
      })
    }
  }

  const [updating, setupdating] = useState(false)
  return (
    <>
      <Display if={props.user.role === 'client'}>
        <div className="personalDetails">
          <Grid stackable>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                        Name, Bio and Location
                      </p>
                      <p className="lowerText">
                      Update your name
                      {/* location and add a brief bio */}
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                      <Input 
                        type="text"
                        placeholder="Full Name"
                        value={clientData.fullname}
                        error={formErrors['fullname']}
                        onChange={(e) => handleChange(e, 'fullname')}
                      />
                      <Input 
                        readOnly
                        placeholder="City"
                        value={ props.address ? props.address.city : '' }
                      />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                        Email address and phone number
                      </p>
                      <p className="lowerText">
                          Change your email address and/or phone number
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                      <Input 
                        readOnly
                        type="email"
                        value={props.user.email}
                        placeholder="Email address"
                        error={formErrors['email']}
                        onChange={(e) => handleChange(e, 'email')}
                      />
                      <Input 
                        value={clientData.phone}
                        type="tel"
                        placeholder="Phone number"
                        error={formErrors['phone']}
                        onChange={(e) => handleChange(e, 'phone')}
                      />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                      Password
                      </p>
                      <p className="lowerText">
                        Update the password for your account
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <Password
                      size="huge"
                      placeholder='Old Password'
                      className="stepOne-form--input"
                      handlechange={(e) => updatePasswordOld(e)}
                      fluid
                    />
                    <Password
                      size="huge"
                      placeholder='New Password'
                      className="stepOne-form--input"
                      handlechange={(e) => updatePasswordNew(e)}
                      fluid
                    />
                    <Display if={messageType === 'success'}>
                      <Message positive>
                        <p>
                          {message}
                          <Button className="closeBtn" onClick={() => updatemessageType("")}>close</Button>
                        </p>
                      </Message>
                    </Display>
                    <Display if={messageType === 'error'}>
                      <Message negative>
                        <p>
                          {message}
                          <Button className="closeBtn" onClick={() => updatemessageType("")}>close</Button>
                        </p>
                      </Message>
                    </Display>
                  </Grid.Column>
              </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16} textAlign="center" style={{textAlign: 'center'}}>
                  <Button size="huge"  className="mainBtn" secondary onClick={submit}>
                    <Display if={!updating}>
                      Update Details
                    </Display>
                    <Display if={updating}>
                      <Loader active inline='centered' />
                    </Display>
                  </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Display>
      
      <Display if={props.user.role === 'provider'}>
        <div className="personalDetails">
          <Grid stackable>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                        Name
                      </p>
                      <p className="lowerText">
                        Update your account name
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                      <Input 
                      type="text"
                        value={providerData.fullname}
                        placeholder="Full Name"
                        error={formErrors['fullname']}
                        onChange={(e) => handleChange_(e, 'fullname')}
                      />
                      <TextArea 
                        rows="5"
                        value={providerData.description}
                        placeholder="Description"
                        error={formErrors['description']}
                        onChange={(e) => handleChange_(e, 'description')}
                      />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                        Email address and phone number
                      </p>
                      <p className="lowerText">
                          Change your email address and/or phone number
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                      <Input 
                        readOnly
                        placeholder="Email"
                        value={props.user.email}
                      />
                      <Input 
                        type="tel"
                        value={providerData.phone}
                        error={formErrors['phone']}
                        placeholder="Phone"
                        onChange={(e) => handleChange_(e, 'phone')}
                      />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                      Password
                      </p>
                      <p className="lowerText">
                        Update the password for your account
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <Password
                      size="huge"
                      placeholder='Old Password'
                      className="stepOne-form--input"
                      handlechange={(e) => updatePasswordOld(e)}
                      fluid
                    />
                    <Password
                      size="huge"
                      placeholder='New Password'
                      className="stepOne-form--input"
                      handlechange={(e) => updatePasswordNew(e)}
                      fluid
                    />
                    <Display if={messageType === 'success'}>
                      <Message positive>
                        <p>
                          {message}
                          <Button className="closeBtn" onClick={() => updatemessageType("")}>close</Button>
                        </p>
                      </Message>
                    </Display>
                    <Display if={messageType === 'error'}>
                      <Message negative>
                        <p>
                          {message}
                          <Button className="closeBtn" onClick={() => updatemessageType("")}>close</Button>
                        </p>
                      </Message>
                    </Display>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center" style={{textAlign: 'center'}}>
                <Button size="huge"  className="mainBtn" secondary onClick={submitProvider}>
                  <Display if={!updating}>
                      Update Details
                    </Display>
                    <Display if={updating}>
                      <Loader active inline='centered' />
                    </Display>
                </Button>
            </Grid.Column>
          </Grid.Row>
        </div>
      </Display>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    address: state.addresses.addressList[0]
  }
}

export default  connect(mapStateToProps, actions)(PersonalDetails)
