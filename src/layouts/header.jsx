import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import logo from "../assets/img/logo.png"
import account from "../assets/img/icon-header-01.png"
import basket from "../assets/img/icon-header-02.png"
import { RxDividerVertical } from "react-icons/rx";
export const Header = () => {
    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <img src={logo} className="mr-2 h-5 sm:h-8" alt="Flowbite React Logo" />
                </NavbarBrand>
                <div className="flex md:order-2">
                    <img src={account} alt="" />
                    <div className='flex align-middle text-slate-300 text-3xl'>
                    <RxDividerVertical />
                    </div>
                    <img src={basket} alt="" />
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <Link  className='text-black text-xl no-underline' to={'/'}active> HOME</Link>
                    <Link className='text-black text-xl no-underline' to={'/shop'}>SHOP</Link>
                    <Link className='text-black text-xl no-underline' to={'/about'}>ABOUT</Link>
                    <Link className='text-black text-xl no-underline' to={'/contact'}>CONTACT </Link>
                </NavbarCollapse>
            </Navbar>
        </>
    );
};









