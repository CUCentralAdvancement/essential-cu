import {useWindowSize} from 'usehooks-ts'
import Image from "./Image";
import ButtonLink from "./ButtonLink";
import {breakpoints} from '../../../data/impact-reports/joy/base'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
// import {useState} from "react";
import {Menu, Transition} from '@headlessui/react'

export default function Header() {
    const {width} = useWindowSize();

    return (
        <Menu as={"div"} className={"relative"}>
            {({open}) => (
                <>
                    <header className="flex flex-col pb-3 shadow-md bg-gold rounded-2xl">
                        <div className="flex flex-row items-center justify-between bg-white rounded-2xl shadow-md px-3">
                            <div className="h-16 md:h-24">
                                <Image sx="h-full"
                                       alt="University of Colorado - Advancement | CU Foundation - Boulder, Colorado Springs, Denver, Anschutz Medical Campus"
                                       src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto/v1614627443/ir-20/logo-cu-png-default2x_ia2y4g.png"/>
                            </div>
                            {width > breakpoints.medium &&
                            <>
                              <div className="flex flex-row items-baseline space-x-4">
                                <ButtonLink href="/impact-reports/2021/financials">Financials</ButtonLink>
                                <ButtonLink href="/impact-reports/2021/stories">Stories</ButtonLink>
                                <ButtonLink href="https://giving.cu.edu" external={true}>Giving At CU</ButtonLink>
                              </div>
                              <div className="text-2xl pr-4">IR 2021 Logo</div>
                            </>
                            }
                            {width < breakpoints.medium &&
                            <div className={"pr-4"}>
                              <Menu.Button className={""}>
                                <FontAwesomeIcon icon={open ? faTimes : faBars}
                                                 className={""}
                                                 style={{height: '36px'}}/>
                              </Menu.Button>
                            </div>
                            }
                        </div>
                    </header>
                    <Transition show={open}
                                enter={"transform transition duration-100 ease-in"}
                                enterFrom={"opacity-0 scale-95"}
                                enterTo={"opacity-100 scale-100"}
                                leave={"transform transition duration-100 ease-out"}
                                leaveFrom={"opacity-100 scale-100"}
                                leaveTo={"opacity-0 scale-95"}>
                        <Menu.Items className={"origin-top-right absolute right-0 w-full mt-2 shadow-lg bg-white" +
                        " divide-y divide-gray-200 grid grid-cols-1 text-center"} static>
                            <Menu.Item>
                                {({active}) => (
                                    <a
                                        className={`${active ? 'bg-gold text-white' : ''} py-3`}
                                        href="/account-settings"
                                    >
                                        Financials
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <a
                                        className={`${active ? 'bg-gold text-white' : ''} py-3`}
                                        href="/account-settings"
                                    >
                                        Stories
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <a
                                        className={`${active ? 'bg-gold text-white' : ''} py-3`}
                                        href="/account-settings"
                                    >
                                        Giving At CU
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}

        </Menu>
    );
}
