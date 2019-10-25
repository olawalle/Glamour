import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import withMasterLayout from './layouts/withMasterLayout';
import { chunk } from 'lodash';
import Footer from '../components/shared/Footer';
import Banner from '../components/home/Banner';
import BeautyServices from '../components/home/BeautyServices';
import Trends from '../components/home/Trends';
import HowItWorks from '../components/home/HowItWorks';
import MoreInfo from '../components/home/MoreInfo';
import dynamic from 'next/dynamic';
import { Skeleton } from 'antd';
import { getTestimonials, getBeautyServices, getTopTrends } from '../store';
import 'antd/lib/skeleton/style/index.css'
import { getAllServices, getAllTrends, getAllProviders, getAllTestimonials } from '../services/generatData.ts'
import Router from 'next/router';
import Navbar from '../components/shared/Navbar';
import './less/index.less'

const Testimonials = dynamic(
  () => import('../components/home/Testimonials'),
  {
    ssr: false,
    loading: () => (
      <Skeleton active={true} paragraph={true} title={false} avatar={false} size="large" shape="square"></Skeleton>
    )
  }
)

class Home extends Component {

  state = {
    ref: React.createRef(),
    services: []
  }

  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    return {}
  }

  componentDidMount() {

    // get list of service categories, trends and serviceProviders
    getAllServices()
      .then(res => {
        this.props.saveServices(res.data.data)
        this.setState({ services: res.data.data })
      })
      .catch(err => {
        console.log(err)
      })

    getAllTrends()
      .then(res => {
        this.props.saveTrends(res.data.data.filter(trend => {
          return trend.serviceName !== null && trend.pictureUrl !== null
        }).splice(0, 3)
        )
      })
      .catch(err => {
        console.log(err)
      })

    getAllProviders()
      .then(res => {
        this.props.saveProviders(res.data.users)
      })
      .catch(err => {
        console.log(err)
      })

    getAllTestimonials()
      .then(res => {
        this.props.saveTestimonials(res.data.testimonials)
      })
  }

  // used to scroll up to the "HOW IT WORKS" section
  jumpUp = () => {
    window.scrollTo(0, this.state.ref.current.offsetTop)
  }

  render() {
    return (
      <>

        <div className="navv">
          <Navbar from="banner" />
        </div>
        <Banner showName={true} />
        <BeautyServices beautyServices={this.props.beautyServices} />
        <Trends trends={this.props.trends} />
        <div ref={this.state.ref} >
          <HowItWorks />
        </div>
        <Testimonials testimonials={this.props.testimonials} />
        <MoreInfo />
        <Footer fromHow={this.jumpUp} services={this.state.services} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    testimonials: getTestimonials(state),
    beautyServices: chunk(getBeautyServices(state), 3),
    trends: chunk(getTopTrends(state), 3)
  }
}

export default connect(mapStateToProps, actions)(withMasterLayout(Home));