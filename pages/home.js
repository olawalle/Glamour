import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Link from 'next/link';

class Home extends Component {

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
        <Link href="/">
          <a>kskd</a>
        </Link>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, actions)(Home);