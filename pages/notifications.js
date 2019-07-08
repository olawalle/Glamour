import React, { Component } from 'react';
import withMasterLayout from './layouts/withMasterLayout';
import Footer from '../components/shared/Footer';
import { connect } from 'react-redux';
import Notifications from '../components/notifications/Notifications';
import { getNotifications, getNotificationReview, getIsWritingReview } from '../store';
import InnerNav from '../components/shared/InnerNav';
import NotificationModal from '../components/notifications/NotificationModal';
import * as actions from '../store/actions';

class notifications extends Component {
  render () {
    return (
      <>
        <InnerNav userRole={'client'} />
        <Notifications {...this.props} />
        <NotificationModal {...this.props}/>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: getNotifications(state),
    review: getNotificationReview(state),
    user: state.user,
    isWritingReview: getIsWritingReview(state),
  }
}

export default connect(mapStateToProps, actions)(withMasterLayout(notifications));