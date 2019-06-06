import React, { Component } from 'react';
import Navbar from '../../components/shared/Navbar';
import axios from 'axios'

export default (Page) => {
  return class extends Component {

    static async getInitialProps (ctx) {
      let pageProps = {}
      if (Page.getInitialProps) {
        pageProps = await Page.getInitialProps(ctx);
      }

      return { ...pageProps };
    }

    componentDidMount() {
      axios.defaults.headers.common['x-access-token'] =  `${window.sessionStorage.getItem('glamourToken')}`
    }

    render () {
      return (
        <>
          <Navbar {...this.props} />
          <Page {...this.props} />
        </>
      )
    }
  };
};