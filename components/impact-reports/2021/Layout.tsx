import Head from "next/head";
import React, {ReactNode} from "react";
import ButtonLink from "./ButtonLink";
import Image from './Image';
// import '../../../styles/impact-report/2021/global.css';

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
                <div>
                    <Header/>
                </div>
                <main className="flex-grow grid grid-cols-1 gap-4">{children}</main>
                <div className="mt-4">
                    <Footer/>
                </div>
            </div>
        </>
    );
}


function Header() {
    return (
        <header className="flex flex-col pb-3">
            <div className="flex flex-row items-center justify-between bg-white">
                <div className="h-16 md:h-24">
                    <Image sx="h-full"
                           alt="University of Colorado - Advancement | CU Foundation - Boulder, Colorado Springs, Denver, Anschutz Medical Campus"
                           src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto/v1614627443/ir-20/logo-cu-png-default2x_ia2y4g.png"/>
                </div>
                <div className="text-2xl pr-4">Impact Report 2021</div>
            </div>
            <div className="flex flex-row items-center justify-around bg-gray-300 p-4 rounded-b-full shadow">
                <ButtonLink href="/impact-reports/2021/financials">Financials</ButtonLink>
                <ButtonLink href="/impact-reports/2021/stories">Stories</ButtonLink>
                <ButtonLink href="https://giving.cu.edu" external={true}>Giving At CU</ButtonLink>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="p-4 bg-black">
            2021
        </footer>
    );
}
