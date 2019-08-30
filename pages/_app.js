import App, { Container } from 'next/app'
import React, { Ref } from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import 'semantic-ui-less/semantic.less';
import { getCurrentUser } from '../services/auth.ts'
import {saveUserData} from '../store/actions'
import * as types from '../store/actions/types'
import axios from 'axios'
import Router from 'next/router'
import '../app.less';
import { Snackbar } from '../components/shared/SnackBar';
import { Progress } from 'semantic-ui-react'
import Head from 'next/head'


class Glamour extends App {

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    snackbarRef: React.createRef(),
    message: "Your session has expired, please login to continue",
    showProgress: false,
    progress: 0
  }

  componentDidMount() { 
    // const script = document.createElement("script");
    // script.src = "https://js.stripe.com/v3/";
    // script.async = true;
    // script.onload = () => {
    //   document.body.appendChild(script);
    //   console.log('stripe loaded')
    // }

    if (window.sessionStorage.getItem('glamourToken')) {
      getCurrentUser()
      .then(res => {
        this.props.reduxStore.dispatch(saveUserData({
          ...res.data.me,
          isLoggedIn: true
        }))
      })
    }
    
  // // axios token interceptor
  // axios.defaults.headers.common['x-access-token'] =  `${window.sessionStorage.getItem('glamourToken')}`
  // axios.interceptors.response.use(function (response) {
  //   // Do something with response data
  //   return response;
  // }, function (error) {
  //   let err = {...error}
  //   console.log('err.response.status', err.response.status)
  //   err.response.status === 403 ? this._showSnackbarHandler() : null
  //   // Do something with response error
  //   // return Promise.reject(error);
  // });

    Router.events.on('routeChangeStart', url => {
      this.setState({showProgress: true})
      setTimeout(() => {
        this.setState({
          progress: this.state.progress + 33
        })
      }, 1000);
    })
    Router.events.on('routeChangeComplete', () => {
      window.scrollTo(0, 0);
      this.setState({progress: 100})
      this.setState({
        showProgress: false,
        progress: 0
      })
    })
    Router.events.on('routeChangeError', () => {
    })

    Router.router.route === '/' ? this.setState({show: false}) : this.setState({show: true })      
  }

  
  // _showSnackbarHandler = () => {
  //   snackbarRef.current.openSnackBar();
  // }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container id="glamour">
        {/* <Snackbar ref = {this.state.snackbarRef} 
          type="error" 
          position={'top'} 
          showClose={true} 
          duration={20000} 
          message={this.state.message} /> */}
          
      <Head>
        <title>Glamour on demand</title>
        <link rel="shortcut icon" href="/static/images/favicon.ico" />
        <script src="https://js.stripe.com/v3/" />
      </Head>
        <Provider store={reduxStore}>
          {/* <PersistGate loading={null}>         */}
            <>
              { this.state.showProgress && <Progress indicating percent={this.state.progress} color='pink' /> }
              <Component {...pageProps} />
            </>
          {/* </PersistGate> */}
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(Glamour)
