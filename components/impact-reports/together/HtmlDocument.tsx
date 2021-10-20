import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import CreditsModal from "./CreditsModal";
import SideNav from "./SideNav";

const BODY_CLASSES_BY_PATH = {
  "page-story": ["story"],
  "page-financials": ["financial"],
  default: ["page-home"],
};

const getBodyClass = (
  pathname: string,
  classMap: { [className: string]: string[] }
) => {
  const bodyClass = pathname
    .split("/")
    .map(
      (uriFragment) =>
        // eslint-disable-next-line no-unused-vars
        Object.entries(classMap).find(([_className, pathsArray]) =>
          pathsArray.reduce(
            (acc: boolean, curr) => acc || uriFragment.startsWith(curr),
            false
          )
        )?.[0]
    )
    .find((a) => a);
  return bodyClass ?? classMap["default"][0];
};

export default function HtmlDocument({
  pathname
}: {
  pathname: string;
}) {

  const bodyClass = getBodyClass(pathname, BODY_CLASSES_BY_PATH);
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
          rel="stylesheet"
        />
        <link
          href="/impact-reports/together/static/globals.css"
          rel="stylesheet"
        />
        {/* Google Tag Manager /}
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KFCM644')};`}}
        />
        {/* End Google Tag Manager */}
      </Head>

      <body className={bodyClass}>
        {
          /*

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFCM644"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />

          */
        }
        <CreditsModal />
        <SideNav />
        <Main />
        <NextScript />

        {bodyClass === "page-home" && (
          <script src="https://giving.cu.edu/static/footer.js?rev=1"></script>
        )}
      </body>
      <script src="/impact-reports/together/static/js/jquery-3.4.1.min.js"></script>

      {bodyClass === "page-home" &&
        <>
          <script src="/impact-reports/together/static/js/ScrollMagic.min.js"></script>
          <script src="/impact-reports/together/static/js/animation.gsap.min.js"></script>
          <script src="/impact-reports/together/static/js/TweenMax.min.js"></script>
          <script src="/impact-reports/together/static/js/home-min.js"></script>
        </>
      }

      {bodyClass === "page-story" && (
        <>
          <script src="/impact-reports/together/static/slick/slick.min.js"></script>
          <script src="/impact-reports/together/static/js/howler.core.min.js"></script>
          <script src="/impact-reports/together/static/js/stories-min.js" async></script>
        </>
      )}

      {bodyClass == "page-financials" && (
        <>
          <script src="/impact-reports/together/static/slick/slick.min.js"></script>
          <script src="/impact-reports/together/static/chart/Chart.bundle.min.js"></script>
          <script src="/impact-reports/together/static/chart/chartjs-plugin-datalabels.js"></script>
          <script src="/impact-reports/together/static/js/financials-min.js"></script>
        </>
      )}

      {<script src="/impact-reports/together/static/js/global-min.js"></script>}
    </Html>
  );
}
