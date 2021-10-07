import Link from 'next/link';
import Image from "./Image";
import ButtonLink from "./ButtonLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Menu, Transition} from '@headlessui/react'

export default function Header() {
  return (
    <Menu as={"div"} className={"relative sticky top-0 z-20"}>
      {({open}) => (
        <>
          <header className={`flex flex-col pb-3 shadow-md bg-gold ${open ? 'rounded-none' : 'rounded-b'}`}>
            <nav className="flex flex-row items-center justify-between bg-white rounded-b px-3">
              <div className="h-16 md:h-24">
                <Link href={"/impact-reports/joy"}>
                  <a>
                    <Image sx="h-full"
                           alt=""
                           src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto/v1614627443/ir-20/logo-cu-png-default2x_ia2y4g.png"/>
                  </a>
                </Link>
              </div>
              <div className="hidden lg:flex flex-row items-baseline space-x-12">
                <ButtonLink label="View the financials page" href="/impact-reports/joy/financials">Financials</ButtonLink>
                <ButtonLink label="View this year's stories" href="/impact-reports/joy#stories">Stories</ButtonLink>
                <ButtonLink label="Make an impact and donate today" href="https://giving.cu.edu" external={true}>Giving At CU</ButtonLink>
              </div>
              <div className="text-2xl pr-4 hidden md:block">IR 2021 Logo</div>
              <div className={"pr-4 block lg:hidden"}>
                <Menu.Button>
                  <FontAwesomeIcon icon={open ? faTimes : faBars}
                                   style={{height: '36px'}}/>
                </Menu.Button>
              </div>
            </nav>
          </header>
          <Transition show={open}
                      enter={"transform transition duration-100 ease-in"}
                      enterFrom={"opacity-0 scale-95"}
                      enterTo={"opacity-100 scale-100"}
                      leave={"transform transition duration-100 ease-out"}
                      leaveFrom={"opacity-100 scale-100"}
                      leaveTo={"opacity-0 scale-95"}>
            <Menu.Items className={"origin-top-right absolute right-0 w-full shadow-lg bg-gold" +
            " space-y-4 pb-4 grid grid-cols-1 text-center place-items-center"} static>
              <Menu.Item>
                {({active}) => (
                  <ButtonLink label="View the financials page"
                              href="/impact-reports/joy/financials"
                              variant={"mobile-menu"}
                              isActive={active}>Financials</ButtonLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({active}) => (
                  <ButtonLink label="View this year's stories"
                              href="/impact-reports/joy#stories"
                              variant={"mobile-menu"}
                              isActive={active}>Stories</ButtonLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({active}) => (
                  <ButtonLink label="Make an impact and donate today"
                              href="https://giving.cu.edu"
                              variant={"mobile-menu"}
                              external={true}
                              isActive={active}>Giving At CU</ButtonLink>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}

    </Menu>
  );
}
