import React, { useState } from 'react';
import Link from 'next/link';
import { Grid, Header, Input, Checkbox, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const styles = {
  Column: {
    background: 'white',
    padding: '45px 20px',
    // marginTop: '135px',
    marginTop: '4%',
    paddingBottom: '15px'
  },
  Link: {
    color: '#e84671',
    // fontWeight: '600'
  },
  Form: {
    padding: '5px 25px'
  },
  FormInput: {
    margin: '10px 0px',
    marginBottom: '30px'
  },
  FormInput2: {
    margin: '10px 0px',
    // marginBottom: '10px'
  },
  Header: {
  },
  SubHeader: {
    marginTop: '10px',
  },
  Checkbox: {
    paddingTop: '3px'
  },
  Button: {
    height: '60px',
    width: '126px'
  },
}

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

    console.log(loginFormData, formErrors)

    // CALL API WITH loginFormData
  }

  const [ formErrors, setFormErrors ] = useState({})

  const [loginFormData, setLoginData] = useState({
    email: '',
    password: '',
  });


  return (
    <Grid id="loginForm" className="loginForm" columns={2} centered>
      <Grid.Row>
        <Grid.Column mobile={14} tablet={9} computer={6}  style={styles.Column}>
          <Header style={styles.Header} textAlign="center" as='h1'>
            Log in
            <Header.Subheader style={styles.SubHeader}>
              Don't have an account? {' '}
              <Link href="/signup">
                <a style={styles.Link}>Sign up</a>
              </Link>
            </Header.Subheader>
          </Header>
          <form style={styles.Form}>
            <Input
              type="email"
              error={formErrors['email']}
              onChange={(e) => handleChange(e, 'email')}
              value={loginFormData.email}
              style={styles.FormInput}
              size="huge"
              placeholder='Email address'
              fluid
            />
            <Input
              type="password"
              error={formErrors['password']}
              onChange={(e) => handleChange(e, 'password')}
              value={loginFormData.password}
              style={styles.FormInput2}
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
                style={styles.Button}
                size="large"
                content='Log in'
                secondary />
              <p>
                Are you a service provider?
                {' '}
                <Link href="/">
                  <a style={styles.Link}>Get started</a>
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