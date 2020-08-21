import App, { Container } from 'next/app'
import '../styles/globals.css'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: "GTM-KFCM644",
};

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default MyApp
