import React from "react";

export default function Footer() {
    return (
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
}
