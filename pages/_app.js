import App, { Container } from 'next/app'
import React, { Ref } from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import 'semantic-ui-less/semantic.less';
import { getCurrentUser } from '../services/auth.ts'
import { getCities } from '../services/generatData.ts'
import {saveUserData} from '../store/actions'
import * as types from '../store/actions/types'
import axios from 'axios'
import Router from 'next/router'
import '../app.less';
import { Snackbar } from '../components/shared/SnackBar';
import { Progress } from 'semantic-ui-react'
import Head from 'next/head'
import Loader from '../components/shared/Loader';


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
    progress: 0,
    loading: false
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
      this.setState({loading: true})
      getCurrentUser()
      .then(res => {
        this.props.reduxStore.dispatch(saveUserData({
          ...res.data.me,
          isLoggedIn: true
        }))
        this.setState({loading: false})
      })
      .catch(err => {
        this.setState({loading: false})
      })
    }
    
  // // axios token interceptor
  // axios.defaults.headers.common['x-access-token'] =  `${window.sessionStorage.getItem('glamourToken')}`
  axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, (error) => {
    let err = {...error}
    if (err.response.status === 403) {
      this.state.snackbarRef.current.openSnackBar();
      setTimeout(() => {
        Router.push('/login')
      }, 3000);
    }
  });

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

  
  _showSnackbarHandler = () => {
    this.state.snackbarRef.current.openSnackBar();
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container id="glamour">
      {

        this.state.loading ? 
        <Loader /> : null
      }
      <Head>
        <title>Grooming on demand</title>
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
        <Snackbar ref = {this.state.snackbarRef} 
          type="error" 
          position={'top'} 
          showClose={false} 
          duration={3000} 
          message={this.state.message} />
          
      </Container>
    )
  }
}

export default withReduxStore(Glamour)
