import React, { Component } from 'react';
import withMasterLayout from './layouts/withMasterLayout';
import Footer from '../components/shared/Footer';
import { connect } from 'react-redux';
import Notifications from '../components/notifications/Notifications';
import { getNotifications, getNotificationReview, getIsWritingReview } from '../store';
import InnerNav from '../components/shared/InnerNav';
import NotificationModal from '../components/notifications/NotificationModal';
import * as actions from '../store/actions';
import { getUserNotifications } from '../services/auth.ts'
import Router from 'next/router'

class notifications extends Component {

  componentDidMount() {
    getUserNotifications()
    .then(res => {
      let notifications = res.data.data
      this.props.saveUserNotifications(notifications)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <>
        <InnerNav userRole={this.props.user.role} />
        <Notifications user={this.props.user} {...this.props} />
        <NotificationModal review={this.props.review} {...this.props}/>
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