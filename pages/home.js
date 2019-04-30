import React, {Component} from 'react';
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

  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    return {}
  }

  componentDidMount () {
    // console.log(this.props);
  }

  render () {
    return (
      <>
        <Banner />
        <BeautyServices beautyServices={this.props.beautyServices} />
        <Trends trends={this.props.trends} />
        <HowItWorks />
        <Testimonials testimonials={this.props.testimonials} />
        <MoreInfo />
        <Footer />
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