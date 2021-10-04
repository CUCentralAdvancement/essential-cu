import Head from "next/head";
import React, {ReactNode} from "react";
import Footer from "./Footer";
import Header from './Header';

interface LayoutProps {
  children: ReactNode,
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet"></link>
        <link href="/impact-reports/joy/tailwind.css" rel="stylesheet"></link>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow grid grid-cols-1 gap-4 pb-4 z-10">{children}</main>
        <Footer/>
      </div>
    </>
  );
}

