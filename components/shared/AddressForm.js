import React, { useState, useEffect } from 'react'
import {Grid, Input, Select} from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions'
import './less/cardDetailsForm.less'
import { addAddress, getUserAddresses, editAddress, deleteAddress } from '../../services/generatData.ts'
import Display from './Display';
import Loader from './Loader';

const AddressForm = (props) => {
  
  const [addressFormData, setAddressData] = useState({
    aptNumber: '',
    streetNumber: '',
    postCode: '',
    city: '',
    instructions: ''
  });
  
  const [ formErrors, setFormErrors ] = useState({})

  const [userAddresses, updateUserAddresses ] = useState([])

  const [addressList, setaddressList] = useState([])

  const [addingNew, setaddingNew] = useState(true)

  const [loading, setloading] = useState(false)

  
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
      }
    })
    setFormErrors(_formErrors)

    // CALL API WITH loginFormData
    if (Object.keys(_formErrors).length <= 0 && !addressFormData._id) {
      setloading(true)
      addAddress(addressFormData)
      .then(res => {
        setloading(false)
        console.log(res)
        fetchUserAddresses()
        setaddingNew(true)
      })
      .catch(err => {
        setloading(false)
        console.log(err)
      })
    } else {
      setloading(true)
      editAddress(addressFormData, addressFormData._id)
      .then(res => {
        console.log(res)
        fetchUserAddresses()
        setaddingNew(true)
        setloading(false)
      })
      .catch(err => {
        setloading(false)
        console.log(err)
      })
    }
    console.log(addressFormData)
  }

  const switchActive = (e, f) => {
    let selected = userAddresses.find(add => add._id === f.value)
    props.saveActiveAddress(f.value)
    setAddressData(selected)
  }

  const addNewAddress = () => {
    setaddingNew(false)
    setAddressData({
      aptNumber: '',
      streetNumber: '',
      postCode: '',
      city: '',
      instructions: ''
    })
  }

  const deleteCurrentAddress = () => {
    setloading(true)
    deleteAddress(addressFormData._id)
    .then(res => {
      console.log(res)
      setloading(false)
      fetchUserAddresses()
    })
    .catch(err => {
      console.log(err)
      setloading(false)
    })
  }

  const fetchUserAddresses = () => {
    getUserAddresses(window.sessionStorage.getItem('glamourToken'))
    .then(res => {
        updateUserAddresses(res.data.addresses)
        props.saveUserAddresses(res.data.addresses)
        let addressList = res.data.addresses.map((add, i) => {
          return { key: `${add.aptNumber}, ${add.streetNumber}`, value: add._id, text: `${add.aptNumber}, ${add.streetNumber}` }
        })
        if (res.data.addresses.length > 0) {
          props.saveActiveAddress(res.data.addresses[0]._id)
          setAddressData(res.data.addresses[0])
          setaddressList(addressList)
        } else {
          setAddressData({
            aptNumber: '',
            streetNumber: '',
            postCode: '',
            city: '',
            instructions: ''
          })
          setaddressList([])
          props.saveActiveAddress("")
        }
    })
    .catch(err => {
      console.log(err)
    })
  }

  const close = () => {
    setaddingNew(true)
    setAddressData(userAddresses[0])
  }

  useEffect(() => {
    let token = window.sessionStorage.getItem('glamourToken')
    if (token) {
      fetchUserAddresses()
    }
  }, [])

  return (
    <>     
      {loading && <Loader />}
        <Grid.Row  className="inputWrap">
            <Display if={addingNew}>
              <Grid.Column width={16}>
              { addressList.length ? 
                <span className="addList">Address List: <Select placeholder="switch address" onChange={(e, data) => switchActive(e, data)} options={addressList} /></span>  : null
              }
              </Grid.Column>
            </Display>
            <Grid.Column width={8}>
                <Input 
                    value={addressFormData.aptNumber}
                    error={formErrors['aptNumber']}
                    onChange={(e) => handleChange(e, 'aptNumber')}
                    placeholder="House/Flat number"
                />
                <img src="/static/icons/grey-home.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input
                    value={addressFormData.streetNumber}
                    error={formErrors['streetNumber']}
                    onChange={(e) => handleChange(e, 'streetNumber')}
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

        <hr className="striped-border" />

        <Grid.Row>
            <Grid.Column>
              <Display if={addingNew}>
                <button className="secondaryBtn" onClick={() => addNewAddress()}>
                    Add new Address
                </button>
                <button className="dangerBtn" onClick={() => deleteCurrentAddress()}>
                    Delete Address
                </button>
              </Display>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row className="bottom">
            <Grid.Column textAlign="center">
              <Display if={!addingNew}>
                <button className="dangerBtn" onClick={() => close()}>
                  Cancel
                </button>
              </Display>
                <button className="mainBtn" onClick={submit}>
                    Save changes
                </button>
            </Grid.Column>
        </Grid.Row>
        {/* <Button secondary className="proceedBtn" 
                onClick={submit}>
          <div> <img src='/static/icons/lock.svg' />  Validate</div>
        </Button> */}
    </>
  )
}


const mapStateToProps = (state) => ({
  userAddresses: state.addresses
})

export default connect(mapStateToProps ,actions)(AddressForm)
