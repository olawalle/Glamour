import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { PersistGate, pers } from 'redux-persist/integration/react'


import 'semantic-ui-less/semantic.less';
import 'react-input-range/lib/css/index.css'
import '../app.less';


class Glamour extends App {

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          {/* <PersistGate loading={null}>         */}
            <Component {...pageProps} />
          {/* </PersistGate> */}
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(Glamour)
