import React, { useState, useEffect } from 'react';
import { Grid, Header, Input, Button, Message, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { resetPassword, requestReset } from '../../services/auth.ts'
import router from 'next/router'
import './less/index.less';

const forgotPasswordResetForm = (props) => {

  useEffect(() => {
    let token = router.router.query.token
    if (token) {
      updateToken(token)
      setHasToken(true)
    }
  }, [])


  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...forgotPasswordFormData,
      [key]: e.target.value || value || checked || ''
    }
    setForgotPasswordData(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  const handleChange_ = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...changePwrdData,
      [key]: e.target.value || value || checked || ''
    }
    setChangePwrdData(newState)

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

    // CALL API WITH forgotPasswordFormData
    if (Object.keys(_formErrors).length === 0) {
      setLoading(true)
      let data = {
        email: forgotPasswordFormData.email
      }
      requestReset(data)
      .then(res => {
        setLoading(false)
        setSuccess(true)
        setSuccessMsg(res.data.message)
      })
      .catch(err => {
        setLoading(false)
        showWarning(true)
        setTimeout(() => {
          showWarning(false)
        }, 5000);
      })
    }
  }

  const submit_ = (e) => {
    e.preventDefault();
    let  _formErrors = {};
    Object.keys(changePwrdData).forEach((item) => {
      if (!changePwrdData[item]) {
        _formErrors[item] = true
      }
    })

    setFormErrors(_formErrors)

    // CALL API WITH forgotPasswordFormData
    if (changePwrdData.newPwrd !== changePwrdData.newPwrd2) {
      showWarning(true)
      setTimeout(() => {
        showWarning(false)
      }, 5000);
    } else if (Object.keys(_formErrors).length === 0) {
      setLoading(true)
      let data = {
        newPassword: changePwrdData.newPwrd,
        token
      }
      resetPassword(data, token)
      .then(res => {
        setSuccess(true)
        setSuccessMsg(res.data.message)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        showWarning(true)
        setTimeout(() => {
          showWarning(false)
        }, 5000);
      })
    }
  }

  const [ formErrors, setFormErrors ] = useState({})
  const [ token, updateToken ] = useState(null)
  const [hasToken, setHasToken] = useState(false)
  const [warning, showWarning] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const [forgotPasswordFormData, setForgotPasswordData] = useState({
    email: ''
  });

  const [changePwrdData, setChangePwrdData] = useState({
    newPwrd: '',
    newPwrd2: ''
  });

  return (
    <Grid className="forgotPassword" columns={2} centered>
      {
        !hasToken ? <Grid.Row>
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
            {
              warning && <Message negative>
                An error occured. Please try again
              </Message>
            }
            {
              success && <Message positive>
                {successMsg}
              </Message>
            }
            <div className="is-v-centered mt20">
              <Button
                onClick={submit}
                size="large"
                secondary>
                  {!loading ? <span>
                    Get link
                  </span> :
                  <Loader active inline='centered' />
                  }
                </Button>
            </div>

          </form>
        </Grid.Column>
      </Grid.Row>

        :

      <Grid.Row>
        <Grid.Column mobile={14} tablet={7} largeScreen={7} widescreen={7}>
          <Header textAlign="center" as='h1'>
            Recover password
            <Header.Subheader>
              Enter your new password
            </Header.Subheader>
          </Header>
          <form className="forgotPassword-form">
            <Input
              type="password"
              error={formErrors['newPwrd']}
              onChange={(e) => handleChange_(e, 'newPwrd')}
              value={changePwrdData.newPwrd}
              size="huge"
              placeholder='New password'
              fluid
            />
            <Input
              type="password"
              error={formErrors['newPwrd']}
              onChange={(e) => handleChange_(e, 'newPwrd2')}
              value={changePwrdData.newPwrd2}
              size="huge"
              placeholder='Confirm New password'
              fluid
            />
            {
              warning && <Message negative>
                The passwords provided do not match
              </Message>
            }
            {
              success && <Message positive>
                {successMsg}
              </Message>
            }
            <div className="is-v-centered mt20">
              <Button
                onClick={submit_}
                size="large"
                secondary>
                  {
                    !loading ? <span>
                        Submit
                      </span> :
                      <Loader active inline='centered' />
                  }
                </Button>
            </div>

          </form>
        </Grid.Column>
      </Grid.Row>
      }
    </Grid>
  );
}

export default connect(null, actions)(forgotPasswordResetForm);