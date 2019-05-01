import React, { Component } from 'react';
import withMasterLayout from './layouts/withMasterLayout';
import Footer from '../components/shared/Footer';
import { connect } from 'react-redux';
import Notifications from '../components/notifications';
import { getNotifications } from '../store';

class notifications extends Component {
  render () {
    return (
      <>
        <Notifications {...this.props} />
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: getNotifications(state)
  }
}

export default connect(mapStateToProps, null)(withMasterLayout(notifications));