import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
// import 'semantic-ui-less/semantic.less';
import 'semantic-ui-less/semantic.less';
// import 'semantic-ui-css/semantic.min.css'

class Glamour extends App {

  static async getInitialProps ({ Component, ctx }) {
    // console.log(Component);
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    // console.log(this.props.initialReduxState)
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(Glamour)
