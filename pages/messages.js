import React, { Component } from 'react';
import withMasterLayout from './layouts/withMasterLayout';
import Footer from '../components/shared/Footer';
import { connect } from 'react-redux';
// import { getNotifications, getNotificationReview, getIsWritingReview } from '../store';
import InnerNav from '../components/shared/InnerNav';
import * as actions from '../store/actions';
import Messages from '../components/messages/Messages';
import Router from 'next/router'

class messages extends Component {

  static async getInitialProps ({ query }) {
    return {
      threadId: query.threadId
    }
  }

  componentDidMount () {
    // console.log(this.props);
    let token = window.sessionStorage.getItem('glamourToken')
    if (!token) {
      // this.props.saveUserData(JSON.parse(userData))
      Router.push("/login")
    }
  }

  render () {
    return (
      <>
        <InnerNav userRole={'client'} />
        <Messages {...this.props}/>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(withMasterLayout(messages));