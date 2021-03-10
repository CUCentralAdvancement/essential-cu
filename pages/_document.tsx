import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { readFileSync} from 'fs';
import path from 'path';
import HtmlDocument from "../components/impact-reports/together/HtmlDocument";

interface Props {
  pathname: string;
  globalCss: string;
}

const DefaultDocument = ({ pathname: _pathname, globalCss: _globalCss }: Props) => (
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
    let globalCss = '';
    if (pathname.startsWith("/impact-reports/together"))
        globalCss = readFileSync(path.join(process.cwd(), '/styles/impact-report/together/globals.css'), 'utf8')

    console.log(`${pathname} CSS: ${globalCss.slice(0,25)}`)
    return {
      ...initialProps,
      pathname,
      globalCss
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
