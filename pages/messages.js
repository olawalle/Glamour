import React, { Component } from 'react';
import withMasterLayout from './layouts/withMasterLayout';
import Footer from '../components/shared/Footer';
import { connect } from 'react-redux';
// import { getNotifications, getNotificationReview, getIsWritingReview } from '../store';
import InnerNav from '../components/shared/InnerNav';
import * as actions from '../store/actions';
import Messages from '../components/messages/Messages';

class messages extends Component {

  static async getInitialProps ({ query }) {
    return {
      threadId: query.threadId
    }
  }

  componentDidMount () {
    // console.log(this.props);
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
    messages: [ { isViewing: true }, {}, {}, {}, {}, {}, {} ],
    thread: [
      {
        origin: 'from',
        msg:`You really think you can fly that thing? Life finds a way.
        They're using our own satellites against us. And the clock is ticking.
        Jaguar shark! So tell me - does it really exist?`,
        time: '08:30am'
      },
      {
        origin: 'to',
        msg:`Yeah, but your scientists were so preoccupied with whether or not they could,
        they didn't stop to think if they should.
        Hey, you know how I'm, like, always trying to save the planet?`,
        time: '09:30am'
      },
      {
        origin: 'from',
        msg:`let me be honest, i love you`,
        time: '08:30am'
      },
      {
        origin: 'from',
        msg:`please say something`,
        time: '08:30am'
      },
      {
        origin: 'from',
        msg:`anything`,
        time: '08:30am'
      },
      {
        origin: 'to',
        msg:`sorry i don't know what to say `,
        time: '08:30am'
      },
      {
        origin: 'to',
        msg:`please say something`,
        time: '08:30am'
      },
      {
        origin: 'to',
        msg:`trying to save the planet`,
        time: '08:30am'
      },
      {
        origin: 'from',
        msg:`you know how I'm`,
        time: '08:30am'
      },
      {
        origin: 'to',
        msg:`your scientists were so preoccupied`,
        time: '08:30am'
      },
    ]
  }
}

export default connect(mapStateToProps, actions)(withMasterLayout(messages));