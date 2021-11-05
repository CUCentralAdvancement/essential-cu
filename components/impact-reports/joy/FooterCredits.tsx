import {Disclosure} from "@headlessui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function FooterCredits() {
  return (
    <Disclosure>
      {({open}) => (
        <div>
          <div className={"py-4 rounded-t-lg bg-gold text-center shadow-credits w-full"}>
            <Disclosure.Button>
              <h3 className={"text-xl font-bold flex flex-row items-center"}>
                <span>Project Credits</span>
                <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className={"h-6 ml-3 inline"}/>
              </h3>
            </Disclosure.Button>
          </div>
          {open && (
            <div className={"bg-gold text-center shadow-md"}>
              <Disclosure.Panel static>
                <ul className={"text-center pb-4 space-y-1 text-18 mx-4"}>
                  <li>Reporting and writing: <span className={"font-bold"}>Fei Wu</span></li>
                  <li>Web design and artwork: <span className={"font-bold"}>Anne Duquennois</span></li>
                  <li>Photography: <span className={"font-bold"}>Cyrus McCrimmon</span></li>
                  <li>Web development: <span className={"font-bold"}>Alex Finnarn and Ian Kleats</span></li>
                  <li>Audience strategy: <span className="font-bold">Katie Princo and Katie Theiler</span></li>
                  <li>Project editor: <span className={"font-bold"}>Tim Skillern</span></li>
                </ul>
              </Disclosure.Panel>
            </div>
          )}
        </div>
      )}
    </Disclosure>
  );
}
