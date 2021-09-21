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
                <link href="/assets/ir21/tailwind.css" rel="stylesheet"></link>
            </Head>
            <div className="flex flex-col min-h-screen" style={{backgroundColor: '#fffaeb'}}>
                <Header/>
                <main className="flex-grow grid grid-cols-1 gap-4 pb-4">{children}</main>
                <Footer/>
            </div>
        </>
    );
}

