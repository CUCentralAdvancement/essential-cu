import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import HtmlDocument from "../components/impact-reports/together/HtmlDocument";

interface Props {
  pathname: string;
}

const DefaultDocument = ({ pathname: _pathname }: Props) => (
  <Html>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default class CustomDocument extends Document<Props> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { pathname } = ctx;
    return {
      ...initialProps,
      pathname
    };
  }

  render() {
      // TODO: Refactor to more elegant routing 
    const doc = this.props.pathname.startsWith("/impact-reports/together") && (
      <HtmlDocument {...this.props} />
    );
    return doc || <DefaultDocument {...this.props} />;
  }
}
