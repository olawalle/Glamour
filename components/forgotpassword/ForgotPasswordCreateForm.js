import React, { useState } from 'react';
import { Grid, Header, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Password from '../shared/Password';

const styles = {
  Column: {
    background: 'white',
    padding: '45px 20px',
    marginTop: '160px',
    paddingBottom: '15px'
  },
  Form: {
    padding: '5px 25px'
  },
  FormInput: {
    margin: '10px 0px',
    marginBottom: '30px'
  },
  Header: {
  },
  SubHeader: {
    marginTop: '10px',
  },
  Button: {
    height: '60px',
    width: '126px'
  },
}

const forgotPasswordCreateForm = (props) => {

  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...forgotPasswordFormData,
      [key]: e.target.value || value || checked || ''
    }
    setForgotPasswordData(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  const submit = (e) => {
    e.preventDefault();
    let  _formErrors = {};
    Object.keys(forgotPasswordFormData).forEach((item) => {
      if (!forgotPasswordFormData[item]) {
        _formErrors[item] = true
      }
    })

    setFormErrors(_formErrors)

    console.log(forgotPasswordFormData, formErrors)

    // CALL API WITH forgotPasswordFormData
  }

  const [ formErrors, setFormErrors ] = useState({})

  const [forgotPasswordFormData, setForgotPasswordData] = useState({
    password: ''
  });


  return (
    <Grid className="forgotPasswordForm" columns={2} centered>
      <Grid.Row>
        <Grid.Column width="7" style={styles.Column}>
          <Header style={styles.Header} textAlign="center" as='h1'>
            Recover password
            <Header.Subheader style={styles.SubHeader}>
              Create a new password
            </Header.Subheader>
          </Header>
          <form style={styles.Form}>
            <Password
              formerror={formErrors['password']}
              handlechange={(e) => handleChange(e, 'password')}
              password={forgotPasswordFormData.password}
              styles={styles.FormInput}
              size="huge"
              placeholder='Password'
              fluid
            />
            <div className="is-v-centered">
              <Button
                onClick={submit}
                style={styles.Button}
                size="large"
                content='Create'
                secondary />
            </div>

          </form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default connect(null, actions)(forgotPasswordCreateForm);