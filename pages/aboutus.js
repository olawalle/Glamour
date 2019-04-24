import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { Link } from 'next/Link';

class Aboutus extends Component {

  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    return {
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <>
        <div id="main">
          <p>kjsdj sdjk</p>
          {/* <li><Link href="/aboutus">About company</Link></li> */}
          {/* <li><Link href="/about/me">About me</Link></li>
          {this.props.child} */}
        </div>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, actions)(Aboutus);