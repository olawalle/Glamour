import React, { Component } from 'react';
import Navbar from '../../components/shared/Navbar';
import axios from 'axios'
import Router from 'next/router';
import Display from '../../components/shared/Display';

export default (Page) => {
  return class extends Component {

    static async getInitialProps (ctx) {
      let pageProps = {}
      if (Page.getInitialProps) {
        pageProps = await Page.getInitialProps(ctx);
      }

      return { ...pageProps };
    }

    state = {
      show: false
    }

    componentDidMount() {
      // axios token interceptor
      if (window.sessionStorage.getItem('glamourToken')) axios.defaults.headers.common['x-access-token'] =  window.sessionStorage.getItem('glamourToken')

      Router.router.route === '/' ? this.setState({show: false}) : this.setState({show: true })
    }

    render () {
      return (
        <>
          <Display if={this.state.show}>
            <Navbar {...this.props} />
          </Display>
          <Page {...this.props} />
        </>
      )
    }
  };
};