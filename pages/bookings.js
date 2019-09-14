import React, { Component } from 'react';
import withMasterLayout from './layouts/withMasterLayout';
import Footer from '../components/shared/Footer';
import { connect } from 'react-redux';
// import { getBookings } from '../store';
import InnerNav from '../components/shared/InnerNav';
import * as actions from '../store/actions';
import Bookings from '../components/bookings/Bookings';
import { getBookings } from '../services/auth.ts'
import { getAllProviders } from '../services/generatData.ts'
import { getProviderBookings } from '../services/providerServices.ts'
import Router from 'next/router'

class bookings extends Component {

  static async getInitialProps ({ query }) {
    return {

    }
  }

  state = {
    userBookings: []
  }

  componentDidMount () {
    let token = window.sessionStorage.getItem('glamourToken')
    if (token) {
      // this.props.saveUserData(JSON.parse(userData))
      
      getAllProviders()
      .then(res => {
        this.props.saveProviders(res.data.users)
        // Object.keys(Router.router.query).length > 0 ? this.setState({allProviders: res.data.users}, () => {
        //   this.getFormData(null, Router.router.query)
        // }) : this.setState({allProviders: res.data.users})
      })
      .catch(err => {
        console.log(err)
      })

      if (this.props.user.role === 'client') {
        getBookings()
        .then(bookings => {
          this.props.saveUserBookings(bookings.data.data)
          this.setState({userBookings: bookings.data.data})
        })
        .catch(err => {
          console.log({...err})
        })
      } else {        
        getProviderBookings()
        .then(providerBookings => {
          this.props.saveUserBookings(providerBookings.data.data)
          this.setState({userBookings: providerBookings.data.data})
        })
        .catch(err => {
          console.log({...err})
        })
      }
    } else {
      Router.push('/login')
    }
  }

  fetchData = (e) => {
    setTimeout(() => {
      this.setState({userBookings: e})  
    }, 100);  
  }

  render () {
    return (
      <>
        <InnerNav userRole={this.props.user.role} />
          <Bookings fetchData={this.fetchData} {...this.props} userBookings={this.state.userBookings} role={this.props.user.role} />
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bookings: state.bookings
  }
}

export default connect(mapStateToProps, actions)(withMasterLayout(bookings));