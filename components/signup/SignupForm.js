import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Grid, Header, Select, Input, Checkbox, Button, Loader, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import {clientRegister} from '../../services/signup.ts'
import Password from '../../components/shared/Password';
import Router from 'next/router';
import './less/signupForm.less';
import Display from '../shared/Display';
import { Snackbar } from '../shared/SnackBar';

const options = [
  { key: 'Referred by a friend', text: 'Referred by a friend', value: 'Referred by a friend' },
  { key: 'onilne search', text: 'Online search', value: 'Online search' },
  { key: 'other', text: 'other', value: 'other' },
]


const SignupForm = (props) => {

  
const styles = {
  modalContents: {
    textAlign: 'center',
    padding: '80px 20px'
  },
  modalImage: {
    marginBotton: '30px'
  },
  modalHeading: {
    fontSize: '30px',
    fontWeight: '600',
    marginTop: '20px',
    fontFamily: 'freightproblack'
  },
  modalText: {
    fontSize: '15px',
    color: '#637381'
  },
  button: {
    height: '52px',
    marginTop: '13px',
    width: '60%'
  }
}

  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...signupFormData,
      [key]: e.target.value || value || checked || ''
    }
    setSignupData(newState)
    props.updateSignupForm(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  const submit = (e) => {
    e.preventDefault();
    let  _formErrors = {};
    Object.keys(signupFormData).forEach((item) => {
      if (!signupFormData[item]) {
        _formErrors[item] = true
      }
    })

    console.log(_formErrors)

    setFormErrors(_formErrors)

    // CALL API WITH signupFormData
    if (Object.keys(_formErrors).length <= 0) {
      // let form = new FormData()
      setsigningUp(true)
      let data = {
        fullnames: signupFormData.fullname,
        email: signupFormData.email,
        password: signupFormData.password,
        phone: signupFormData.mobileNumber,
        meta: 'nothing here'
      }
      clientRegister(data)
      .then(res => {
        console.log(res)
        setsigningUp(false)
        setModal(true) 
        // Router.push('/login')
        // return <Snackbar message={res.data.message} actionText="dismiss" />
      })
      .catch(err => {
        setsigningUp(false)
        setMessage(err.response.data.message)
        setSnackType('error')
        _showSnackbarHandler()
        console.log({...err})
      })
    }
  }

  const [ formErrors, setFormErrors ] = useState({})

  const [signupFormData, setSignupData] = useState({
    fullname: '',
    email: '',
    mobileNumber: '',
    password: '',
    referral: '',
    accept: ''
  });
  
  const [signingUp, setsigningUp] = useState(false)
  const [modal, setModal] = useState(false)
  const [snackType, setSnackType] = useState('')
  const [message, setMessage] = useState('')
  const snackbarRef = useRef(null);

  const _showSnackbarHandler = () => {
    snackbarRef.current.openSnackBar();
  }

  // useEffect(() => {
  //   // console.log(formErrors)
  //   let store = null
  //   if (store = JSON.parse(localStorage.getItem('store'))) {
  //     if (store.auth) {
  //       setSignupData(store.auth.signup)
  //     }

  //   }
  // }, [])

  return (
    <>
    <Snackbar
      ref = {snackbarRef} 
      message={message}
      type={snackType}
      showClose={false}
      position='top'
      duration={5000}
     />
    <Grid id="signup" className="signup" columns={2} centered>
      <Grid.Row>
        <Grid.Column mobile={14} tablet={11} computer={9} largeScreen={8} widescreen={5}>
          <Header textAlign="center" as='h1'>
            Sign up
            <Header.Subheader className="mt-10">
              Already have an account? {' '}
              <Link href="/login">
                <a className="is-pink">Log in</a>
              </Link>
            </Header.Subheader>
          </Header>
          <form className="signup-form">
            <Input
              onChange={(e) => handleChange(e, 'fullname')}
              error={formErrors['fullname']}
              value={signupFormData.fullname}
              className="signup-form--input"
              size="huge"
              placeholder='Full Name'
              fluid
            />
            <Input
              type="email"
              error={formErrors['email']}
              onChange={(e) => handleChange(e, 'email')}
              value={signupFormData.email}
              className="signup-form--input"
              size="huge"
              placeholder='Email address'
              fluid
            />
            <Input
              type="number"
              error={formErrors['mobileNumber']}
              onChange={(e) => handleChange(e, 'mobileNumber')}
              value={signupFormData.mobileNumber}
              className="signup-form--input"
              size="huge"
              placeholder='Mobile number'
              fluid
            />
            <Password
              formerror={formErrors['password']}
              handlechange={(e) => handleChange(e, 'password')}
              password={signupFormData.password}
              size="huge"
              placeholder='Password'
              className="signup-form--input"
              fluid
            />
            <Select
              error={formErrors['referral']}
              onChange={(e, data) => handleChange(e, 'referral', data)}
              className="signup-form--select signup-form--input"
              value={signupFormData.referral}
              fluid
              options={options}
              placeholder='How did you hear about Glamour?'
            />
            <div className="is-flex">
              <Checkbox
                className="signup-form--checkbox"
                error={formErrors['accept']}
                onChange={(e, data) => handleChange(e, 'accept', data)}
              />
              <span>
                Yes, I accept the
                <Link href="/termsandconditions">
                  <a className="is-pink">{' '}Terms and Conditions{' '}</a>
                </Link>
                of Glamour on Demand
              </span>
            </div>
            <div className="is-v-centered">
              <Button
                onClick={submit}
                className="mt-30"
                size="large"
                secondary>
                  <Display if={signingUp}>
                    <Loader active inline='centered' />
                  </Display>
                  <Display if={!signingUp}>
                    Sign up
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
    </Grid>
    
      <Modal size='tiny' open={modal} onClose={() => setModal(false) }>
        <Modal.Content>
          <div className="modalContents" style={styles.modalContents}>
            <img src="/static/icons/green-check.svg" style={styles.modalImage} alt=""/>
            <p style={styles.modalHeading}>Successful</p>
            <p style={styles.modalText}>
              Your account has been sucessfully created. Please check your mail to verify your account
            </p>
            <Link href="/login">
              <Button  secondary style={styles.button}>
                Proceed to Login
              </Button>
            </Link>
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    signup: state.auth.signup
  }
}

export default connect(mapStateToProps, actions)(SignupForm);