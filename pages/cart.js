import React, { Component } from 'react';
import withMasterLayout from './layouts/withMasterLayout';
import Footer from '../components/shared/Footer';
import { connect } from 'react-redux';
import { getCartItems } from '../store';
import * as actions from '../store/actions';
import Cart from '../components/cart/Cart';

class messages extends Component {

  static async getInitialProps ({ query }) {
    return {

    }
  }

  componentDidMount () {
    // console.log(this.props);
  }

  render () {
    return (
      <>
        <Cart {...this.props}/>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: getCartItems(state)
  }
}

export default connect(mapStateToProps, actions)(withMasterLayout(messages));