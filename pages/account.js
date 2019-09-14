import React, { useState, useEffect, useRef } from 'react'
import { Grid, Container } from 'semantic-ui-react';
import InnerNav from '../components/shared/InnerNav';
import withMasterLayout from './layouts/withMasterLayout';
import * as actions from '../store/actions'
import { connect } from 'react-redux';
import Router from 'next/router'
import './less/account.less'
import SideNav from './account/sideNav';
import PersonalDetails from './account/PersonalDetails';
import ManageSubscriptions from './account/ManageSubscriptions';
import ManagePayments from './account/ManagePayments';
import BusinessDetails from './account/BusinessDetails'
import Display from '../components/shared/Display';
import { uploadImage, getAllProviders } from '../services/generatData.ts'
import {getLookbook , addLookbook, getSubscriptions, getBills} from '../services/providerServices.ts'
import { getSavedProviders, getCurrentUser } from '../services/auth.ts'
import CustomImageUploader from '../components/shared/CustomImageUploader';
import Loader from '../components/shared/Loader';
import LookBook from './account/LookBook';
import AddressBook from './account/addressBook';
import SavedServiceProviders from './account/savedServiceProviders';
import UserCards from './account/UserCards';
import { Snackbar } from '../components/shared/SnackBar';


const Account = (props) => {
  
  const [providerLinks, updateproviderLinks] = useState([
    {
        text: 'Personal details',
        component: <PersonalDetails role={props.role} />,
        active: 'active',
        icon: '/static/icons/personalDetails.svg',
        route: ''
    },
    {
        text: 'Business details',
        component: <BusinessDetails />,
        active: 'inactive',
        icon: '/static/icons/briefcase.svg',
        route: ''
    },
    {
        text: 'Manage subscriptions',
        component: <ManageSubscriptions subscriptions={props.availableSubscriptions} />,
        active: 'inactive',
        icon: '/static/icons/subscriptions.svg',
        route: ''
    },
    {
        text: 'Manage payments',
        component: <ManagePayments showAdd={false} />,
        active: 'inactive',
        icon: '/static/icons/card.svg',
        route: ''
    },
    {
        text: 'Upload Lookbook',
        component: <LookBook user={ props.user } />,
        active: 'inactive',
        icon: '/static/icons/card.svg',
        route: ''
    }
  ])
  
  const [clientLinks, updateclientLinks] = useState([
    {
        text: 'Personal details',
        component: <PersonalDetails role={props.role} />,
        active: 'active',
        icon: '/static/icons/personalDetails.svg'
    },
    {
        text: 'Address book',
        component: <AddressBook />,
        active: 'inactive',
        icon: '/static/icons/addressbook.svg'
    },
    {
        text: 'Payment methods and invoices',
        component: <UserCards showAdd={true} />,
        active: 'inactive',
        icon: '/static/icons/subscriptions.svg'
    },
    {
        text: 'Saved service providers',
        component: <SavedServiceProviders />,
        active: 'inactive',
        icon: '/static/icons/filled-heart.svg'
    },
    // {
    //     text: 'Upload Lookbook',
    //     component: <LookBook />,
    //     active: 'inactive',
    //     icon: '/static/icons/card.svg'
    // }
  ])

  
  const [activeComponent, updateActiveComponent ] = useState()
  const snackbarRef = useRef(null);

  const [snackType, setSnackType] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setloading] = useState(false)
  const updateActiveComponent_ = (component) => {
    // updateActiveComponent(component)
  }

  useEffect(() => {
    
    if (window && !window.sessionStorage.getItem('glamourToken')) {
        Router.push('/login')
    } else {
    //   props.saveUserData(JSON.parse(userData))
      getLookbook(props.user.id)
      .then(res => {
          props.saveUserLookbook(res.data.looks)
      })

      getAllProviders()
      .then(res => {
        props.saveProviders(res.data.users)
        getSavedProviders()
          .then(prv => {
            props.saveFavedProviders(prv.data.providers)
          })
          .catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err)
      })

      getBills()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }

    getSubscriptions()
    .then(res => {
      props.saveAvailableSubscriptions(res.data.subscriptions)
    })
    
  }, [])

  const uploadPicture = (e) => {
    console.log(e)
    let formData = new FormData()
    formData.append('picture', e)
    setloading(true)
    uploadImage(formData, props.user.id)
    .then(res => {
      setloading(false)
      getCurrentUser()
      .then(response => {
          console.log(response)
          let payload = {
          ...response.data.me,
          isLoggedIn: true
          }
          props.saveUserData(payload)
        //   setSnackType('success')
        //   _showSnackbarHandler()
        //   setMessage(response.data.message)
      })
      .catch(err => {
        setSnackType('error')
        setMessage(err.response.data.message)
        _showSnackbarHandler()
        setloading(false)
      })
    })
    .catch(err => {
        console.log({...err})
        setSnackType('error')
        setMessage(err.response.data.message)
        _showSnackbarHandler()
        setloading(false)
    })
  }

  const _showSnackbarHandler = () => {
    snackbarRef.current.openSnackBar();
  }

  return (
    <div className="accountComponent">
    {loading && <Loader />}
      <InnerNav userRole={props.userRole}/>
      <Snackbar ref = {snackbarRef} 
        type={snackType} 
        position={'top'} 
        showClose={true} 
        duration={5000} 
        message={message} />
      <Container>
        <Grid>
            <Grid.Row>
            <Grid.Column  mobile={16} tablet={16} largeScreen={5} widescreen={5} textAlign="center">
                <div className="lightShadow leftWing">
                    <Display if={props.userRole === 'provider'}>
                        <div className="leftWingTop">
                          <CustomImageUploader getImageFile={uploadPicture}>
                              <div className="userPhoto">
                                  <img src="/static/icons/edit_.svg" className="edit" alt=""/>
                                  <img className="userFace" src={props.user.pictureUrl} alt=""/>
                              </div>
                          </CustomImageUploader>
                            <p className="userName">
                                {
                                    props.user.fullname
                                }
                            </p>
                            <p className="jobDesc">
                                {/* {props.user.service} */}
                            </p>
                            <p className="userDesc">
                                {props.user.description}
                            </p>
                        </div>
                    </Display>
                    
                    <Display if={props.userRole === 'client'}>
                        <div className="leftWingTop">
                          <CustomImageUploader getImageFile={uploadPicture}>
                            <div className="userPhoto">
                                <img src="/static/icons/edit_.svg" className="edit" alt=""/>
                                <img className="userFace" src={props.user.pictureUrl} alt=""/>
                            </div>
                            </CustomImageUploader>
                            <p className="userName">
                                {
                                    props.user.fullname
                                }
                            </p>
                            {/* <p className="userDesc">
                                Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Life finds a way. 
                            </p> */}
                            <p className="location">
                                {props.address ? <><img src="/static/icons/grey-map-marker.svg" alt=""/> {props.address.city}</> : null }
                            </p>
                        </div>
                    </Display>

                    <SideNav role={props.userRole ? props.userRole : ""} />
                </div>
            </Grid.Column>
            <Grid.Column  mobile={16} tablet={16} largeScreen={11} widescreen={11}>
                <div className="lightShadow rightWing">
                  { props.user.role && props.userRole === 'client' ?
                      clientLinks.find(link => link.text === props.activeComponent).component
                    : providerLinks.find(link => link.text === props.activeComponent).component 
                  }  
                </div>
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      userRole: state.user.role,
      user: state.user,
      address: state.addresses.addressList[0],
      allProviders: state.serviceProviders.allProviders,
      activeComponent: state.activeComponent.activeComponent 
    }
}

export default connect(mapStateToProps, actions)(withMasterLayout(Account))
