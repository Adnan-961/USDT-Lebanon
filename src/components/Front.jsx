/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import "./style.css"
import logo from "./u.svg" 
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <img src={logo} alt="" className="pt-2" />
              </div>
              <div className="hidden md:block">
                <div className="ml-20 space-x-8 justify-between items-center">
                  
                <Link to="/Home"><span className="text  px-3 py-2 rounded-md text-sm font-medium text-2xl">Home</span></Link>
                <Link to="/Buy"><span className=" text   px-3 py-2 rounded-md text-sm font-medium text-2xl">Buy USDT</span></Link>
                <Link to="/Sell"><span className="text  px-3 py-2 rounded-md text-sm font-medium text-2xl">Sell USDT</span></Link>


               
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="nav inline-flex items-center justify-center p-2 rounded-md "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden nav" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              
                <Link to="/home"><span className="text text-white block px-3 py-2 rounded-md  font-medium ">Home</span></Link>
                <Link to="/buy"><span className=" text  text-white block px-3 py-2 rounded-md  font-medium">Buy USDT</span></Link>
                <Link to="/sell"><span className="text  text-white block px-3 py-2 rounded-md  font-medium">Sell USDT</span></Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>


      
    </div>
  );
}

export default Nav;
