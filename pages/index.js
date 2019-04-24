import React from 'react'
import { connect } from 'react-redux'
import { serverRenderAction } from '../store/actions'
import Banner from '../components/home/Banner'
import Link from 'next/link'
import Axios from 'axios';

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`


    const { data } = await Axios.get('http://localhost:1000');

    return {
      i: data.posts
    }
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // Axios.get('http://localhost:1000').then((res) => {
    //   console.log(res)
    // })
    console.log(this.props);
    // console.log(this.props.reduxStore.getState());
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <>
       <h1>Hello</h1>
      </>
    )
  }
}
const mapDispatchToProps = {  }
export default connect(
  null,
  mapDispatchToProps
)(Index)
