import React, { useState } from 'react';
import { Grid, Header, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Password from '../shared/Password';
import './less/index.less';

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
    <Grid className="forgotPassword" columns={2} centered>
      <Grid.Row>
        <Grid.Column mobile={14} tablet={7} largeScreen={7} widescreen={7}>
          <Header className="forgotPassword" textAlign="center" as='h1'>
            Recover password
            <Header.Subheader>
              Create a new password
            </Header.Subheader>
          </Header>
          <form className="forgotPassword-form">
            <Password
              formerror={formErrors['password']}
              handlechange={(e) => handleChange(e, 'password')}
              password={forgotPasswordFormData.password}
              size="huge"
              placeholder='Password'
              fluid
            />
            <div className="is-v-centered">
              <Button
                onClick={submit}
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