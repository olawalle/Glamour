import React, { useState } from 'react';
import Link from 'next/link';
import { Grid, Header, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {login} from '../../services/auth.ts'
import * as actions from '../../store/actions';
import Router from 'next/router';
import './less/loginForm.less';

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
      } else {
        props.updateLoginForm({...loginFormData, isLoggedIn: true})
      }
    })
    setFormErrors(_formErrors)
    console.log(loginFormData, formErrors)  
    let data = {
      email: loginFormData.email,
      password: loginFormData.password
    }

    login(data)
    .then(res => {
      props.saveUserData({...res.data.data, isLoggedIn: true})
      window.sessionStorage.setItem('glamourToken', res.data.data.token)
      Router.push('/serviceproviders')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const [ formErrors, setFormErrors ] = useState({})

  const [loginFormData, setLoginData] = useState({
    email: '',
    password: '',
  });


  return (
    <Grid id="login" className="login" columns={2} centered>
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
                content='Log in'
                secondary />
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
    </Grid>
  );
}

export default connect(null, actions)(LoginForm);