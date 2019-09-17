import React, { useState } from 'react';
import { Grid, Header, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import './less/index.less';

const forgotPasswordResetForm = (props) => {

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
    email: ''
  });

  return (
    <Grid className="forgotPassword" columns={2} centered>
      <Grid.Row>
        <Grid.Column mobile={14} tablet={7} largeScreen={7} widescreen={7}>
          <Header textAlign="center" as='h1'>
            Recover password
            <Header.Subheader>
              Enter the email address associated with your account to receive a password reset link
            </Header.Subheader>
          </Header>
          <form className="forgotPassword-form">
            <Input
              type="email"
              error={formErrors['email']}
              onChange={(e) => handleChange(e, 'email')}
              value={forgotPasswordFormData.email}
              size="huge"
              placeholder='Email address'
              fluid
            />
            <div className="is-v-centered mt20">
              <Button
                onClick={submit}
                size="large"
                content='Get link'
                secondary />
            </div>

          </form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default connect(null, actions)(forgotPasswordResetForm);