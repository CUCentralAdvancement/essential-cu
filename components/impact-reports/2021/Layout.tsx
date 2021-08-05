// import '../../../sx/impact-report/2021/global.css'
import {ReactNode} from "react";
import ButtonLink from "./ButtonLink";
import Image from './Image';

interface LayoutProps {
    children: ReactNode,
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Header/>
            </div>
            <main className="flex-grow grid grid-cols-1 gap-4">{children}</main>
            <div>
                <Footer/>
            </div>
        </div>
    );
}


function Header() {
    return (
        <header className="grid grid-cols-3 items-center">
            <div className="h-16 md:h-24">
                <Image sx="h-full"
                       alt="University of Colorado - Advancement | CU Foundation - Boulder, Colorado Springs, Denver, Anschutz Medical Campus"
                       src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto/v1614627443/ir-20/logo-cu-png-default2x_ia2y4g.png"/>
            </div>
            <div className="text-center text-2xl">Impact Report 2021</div>
            <div className="flex flex-row justify-self-end pr-3 md:pr-12">
                <ButtonLink href="financials">Financials</ButtonLink>
                <ButtonLink href="stories" sx="pl-1">Stories</ButtonLink>
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
