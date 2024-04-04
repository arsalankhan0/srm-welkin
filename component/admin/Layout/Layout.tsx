"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import SideNav from '@/component/admin/side-nav/SideNav';
import './style.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    useEffect(() => {
        const menuBtn = document.querySelector("#menu-btn");
        const sidebar = document.querySelector("#sidebar");
        const container = document.querySelector(".my-container");

        const handleClick = () => {
            setIsSideNavOpen(!isSideNavOpen);
            sidebar?.classList.toggle("active-nav");
            container?.classList.toggle("active-cont");

            if (!isSideNavOpen && menuBtn) 
            {
                (menuBtn as HTMLElement).style.marginLeft = '-49px';
            } 
            else if (menuBtn) 
            {
                (menuBtn as HTMLElement).style.marginLeft = '-89px';
            }
        };

        menuBtn?.addEventListener("click", handleClick);

        return () => {
            menuBtn?.removeEventListener("click", handleClick);
        };
    }, [isSideNavOpen]);

    return (
        <>
            <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
                <SideNav />
            </div>
            <div className="my-container active-cont">
                <nav className='navbar top-navbar d-flex justify-content-start navbar-light bg-light ps-5 pe-2'>
                    <a className="btn border-0 menu-btn" id="menu-btn">
                        {isSideNavOpen ? <FaArrowRight /> : <FaArrowLeft />}
                    </a>
                    <h3 className='w-100 text-center'>Welcome Admin</h3>
                </nav>
                {children}
            </div>
        </>
    );
};

export default Layout;


