import React from 'react'
import { connect } from 'react-redux'
import { serverRenderAction } from '../store/actions'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(serverRenderAction(isServer))

    return {}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`

  }

  componentWillUnmount () {
  }

  render () {
    return (
      <h1>Glamour</h1>
    )
  }
}
const mapDispatchToProps = {  }
export default connect(
  null,
  mapDispatchToProps
)(Index)
