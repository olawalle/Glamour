import React, { Component } from 'react';
import Navbar from '../../components/shared/Navbar';

export default (Page) => {
  return class extends Component {

    // static async getInitialProps() {
    //   return {};
    // }

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