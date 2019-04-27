import React, {Component} from 'react';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import Introduction from '../components/aboutus/Introduction';
import Info from '../components/shared/Info';
import Team from '../components/aboutus/Team';


class Aboutus extends Component {

  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    return {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <Info text="About us" banner="/static/images/aboutusbanner.svg">
        <Introduction />
        <Team />
      </Info>
    )
  }

}

export default withMasterLayout(Aboutus);