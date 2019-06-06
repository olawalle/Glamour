import React, { Component } from 'react';
import withMasterLayout from './layouts/withMasterLayout';
import Footer from '../components/shared/Footer';
import { connect } from 'react-redux';
import { getBookings } from '../store';
import InnerNav from '../components/shared/InnerNav';
import * as actions from '../store/actions';
import Bookings from '../components/bookings/Bookings';

class bookings extends Component {

  static async getInitialProps ({ query }) {
    return {

    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <>
        <InnerNav userRole={'client'} />
        <Bookings {...this.props}/>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookings: getBookings(state)
  }
}

export default connect(mapStateToProps, actions)(withMasterLayout(bookings));