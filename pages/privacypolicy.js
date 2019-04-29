import React, { Component } from 'react';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import Info from '../components/shared/Info';
import Content from '../components/privacypolicy/Content';


class PrivacyPolicy extends Component {

  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    return {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <Info text="Privacy policy" banner="/static/images/privacypolicybanner.png">
        <Content />
      </Info>
    )
  }

}

export default withMasterLayout(PrivacyPolicy);