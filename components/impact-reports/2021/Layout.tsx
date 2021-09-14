import Head from "next/head";
import React, {ReactNode} from "react";
import ButtonLink from "./ButtonLink";
import Image from './Image';

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
            <div className="flex flex-row items-center justify-around bg-gray-300 p-4 rounded-b-full shadow-md">
                <ButtonLink href="/impact-reports/2021/financials">Financials</ButtonLink>
                <ButtonLink href="/impact-reports/2021/stories">Stories</ButtonLink>
                <ButtonLink href="https://giving.cu.edu" external={true}>Giving At CU</ButtonLink>
            </div>
        </header>
    );
}

const Footer = () => (
    <footer className="bg-white p-4 text-black">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
                <a href="https://giving.cu.edu/fund-search">
                    <button className="py-3 px-6 text-black font-bold bg-gold text-lg uppercase rounded-2xl" data-testid="footer-give-button">
                        Give Now
                    </button>
                </a>
                <div className="p-3">
                    CU Advancement | CU Foundation
                    <br/>
                    1800 Grant Street | Denver, CO 80203
                    <br/>
                    303-541-1290 | giving@cu.edu
                    <br/>
                    <a className="underline text-blue-500" href="https://www.cu.edu/privacy-policy">
                        Privacy Policy
                    </a>{' '}
                    |{' '}
                    <a className="underline text-blue-500" href="https://www.cu.edu/terms-service">
                        Terms of Service
                    </a>
                </div>
            </div>
            <div>
                <h3>About Us</h3>
                <ul className="list-none">
                    <li>
                        <a href="https://giving.cu.edu/about-us/central-cu-advancement">Central CU Advancement</a>
                    </li>
                    <li>
                        <a href="https://giving.cu.edu/about-us/university-colorado-foundation">CU Foundation</a>
                    </li>
                    <li>
                        <a href="https://giving.cu.edu/about-us/cu-foundation/cu-foundation-financial-and-investment-documents">CU Foundation Reports &amp; Financials</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Quicklinks</h3>
                <ul className="list-none">
                    <li>
                        <a href="https://giving.cu.edu/guide-giving">Guide to Giving</a>
                    </li>
                    <li>
                        <a href="https://giving.cu.edu/faq/make-gift-mail">Give by Mail/Check</a>
                    </li>
                    <li>
                        <a href="https://giving.cu.edu/faq/make-gift-phone">Give by Phone</a>
                    </li>
                    <li>
                        <a href="https://giving.cu.edu/faq">FAQs</a>
                    </li>
                    <li>
                        <a href="https://giving.cu.edu/about-us/careers">Careers</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Campus Offices</h3>
                <ul className="list-none">
                    <li>
                        <a href="https://supportcuanschutz.ucdenver.edu/">
                            Anschutz
                        </a>
                    </li>
                    <li>
                        <a href="https://www.colorado.edu/advancement/">
                            Boulder
                        </a>
                    </li>
                    <li>
                        <a href="https://www.uccs.edu/~advancement/">
                            Colorado Springs
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ucdenver.edu/offices/office-of-advancement">
                            Denver
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

