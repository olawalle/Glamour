import React, { Component } from 'react';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import Info from '../components/shared/Info';
import Content from '../components/termsandconditions/Content';


class TermsAndConditions extends Component {

  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    return {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <Info text="Terms and conditions" banner="/static/images/termsandconditionsbanner.png">
        <Content />
      </Info>
    )
  }

}

export default withMasterLayout(TermsAndConditions);