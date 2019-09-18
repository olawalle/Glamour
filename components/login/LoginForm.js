import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Grid, Header, Input, Button, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { login, getCurrentUser, getUserNotifications, getBookings, getSavedProviders} from '../../services/auth.ts'
import { getProviderServices, getProviderBookings, getProviderReviews } from '../../services/providerServices.ts'
import { getUserAddresses } from '../../services/generatData.ts'
import * as actions from '../../store/actions';
import Router from 'next/router';
import './less/loginForm.less';
import Display from '../shared/Display';
import { Snackbar } from '../shared/SnackBar';

const LoginForm = (props) => {

  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...loginFormData,
      [key]: e.target.value || value || checked || ''
    }
    setLoginData(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  const submit = (e) => {
    e.preventDefault();
    
    let  _formErrors = {};
    Object.keys(loginFormData).forEach((item) => {
      if (!loginFormData[item]) {
        _formErrors[item] = true
      }
    })
    setFormErrors(_formErrors)

    if (Object.keys(_formErrors).length === 0) {
      setlogginIn(true)

      let data = {
        email: loginFormData.email,
        password: loginFormData.password
      }

      login(data)
      .then(res => {
        console.log('then')
        window.sessionStorage.setItem('glamourToken', res.data.data.token)
        let payload = {
          ...res.data.data.user,
          isLoggedIn: true
        }
        props.saveUserData(payload)
        setlogginIn(false)   
          if ( res.data.data.user.role === 'client')  {
            getUserAddresses(res.data.data.token)
            .then(addresses => {
                props.saveUserAddresses(addresses.data.addresses)
                addresses.data.addresses[0] ? props.saveActiveAddress(addresses.data.addresses[0]['_id']) : props.saveActiveAddress('')
            })
            .catch(err => {
              console.log(err)
            })
          }

          if (Router.router.query.from === 'book-service') {
            Router.push('/checkout')
          } else if (res.data.data.user.role === 'client') {
            Router.push('/serviceproviders')
          } else if (res.data.data.user.role === 'provider') {
            Router.push('/provider/home')
          } else {
            Router.push('/admin')
          }
      })
      .catch(err => {
        setlogginIn(false)
        setMessage(err.response.data.message)
        setSnackType('error')
        _showSnackbarHandler()
      })
    }
  }

  const snackbarRef = useRef(null);

  const _showSnackbarHandler = () => {
    snackbarRef.current.openSnackBar();
  }

  const [ formErrors, setFormErrors ] = useState({})

  const [loginFormData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [logginIn, setlogginIn] = useState(false)
  const [snackType, setSnackType] = useState('')
  const [message, setMessage] = useState('')
 
  useEffect(() => {
    window.sessionStorage.removeItem('glamourToken')
  }, [])

  return (
    <>
      <Snackbar ref = {snackbarRef} 
        type={snackType} 
        position={'top'} 
        showClose={true} 
        duration={5000} 
        message={message} />
      {
        !props.from ? <Grid id="login" className="login" columns={2} centered>
        <Grid.Row>
          <Grid.Column mobile={14} tablet={9} computer={7} largeScreen={6} widescreen={5}>
            <Header textAlign="center" as='h1'>
              Log in
              <Header.Subheader className="mt-10">
                Don't have an account? {' '}
                <Link href="/signup">
                  <a className="is-pink">Sign up</a>
                </Link>
              </Header.Subheader>
            </Header>
            <form className="login-form">
              <Input
                type="email"
                error={formErrors['email']}
                onChange={(e) => handleChange(e, 'email')}
                value={loginFormData.email}
                className="login-form--input1"
                size="huge"
                placeholder='Email address'
                fluid
              />
              <Input
                type="password"
                error={formErrors['password']}
                onChange={(e) => handleChange(e, 'password')}
                value={loginFormData.password}
                className="login-form--input2"
                size="huge"
                placeholder='Password'
                fluid
              />
              <Link href="/forgotpassword/reset">
                <a className="forgotPassword">Forgot password ?</a>
              </Link>
              <div className="is-v-centered">
                <Button
                  onClick={submit}
                  size="large"
                  secondary >
                    <Display if={logginIn}>
                      <Loader active inline='centered' />
                    </Display>
                    <Display if={!logginIn}>
                      Log in
                    </Display>
                  </Button>
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
      </Grid> : <form className="login-form">
              <Input
                type="email"
                error={formErrors['email']}
                onChange={(e) => handleChange(e, 'email')}
                value={loginFormData.email}
                className="login-form--input1"
                size="huge"
                placeholder='Email address'
                fluid
              />
              <Input
                type="password"
                error={formErrors['password']}
                onChange={(e) => handleChange(e, 'password')}
                value={loginFormData.password}
                className="login-form--input2"
                size="huge"
                placeholder='Password'
                fluid
              />
              <Link href="/forgotpassword/reset">
                <a className="forgotPassword">Forgot password ?</a>
              </Link>
              <div className="is-v-centered">
                <Button
                  onClick={submit}
                  size="large"
                  secondary >
                    <Display if={logginIn}>
                      <Loader active inline='centered' />
                    </Display>
                    <Display if={!logginIn}>
                      Log in
                    </Display>
                  </Button>
              </div>

            </form>
      }
      
    </>
  );
}

export default connect(null, actions)(LoginForm);