"use client";
import React from "react";
import Navlink from "./Navlink";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  position: string;
  btnPosition: boolean;
  navRef?: React.RefObject<HTMLDivElement>;
}

const NavigationSection = ({ position, btnPosition, navRef }: Props) => {
  const isMobileNavOpen = useAppSelector(state => state.mobileNav.isMobileNavOpen);
  return (
    <div
    ref={navRef}
    className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
    id="navbarNav"
  >
    <ul className={`navbar-nav ${position}`}>
      <li className="nav-item">
          <Navlink href="/">Home</Navlink>
      </li>
      <li className="nav-item">
        <Navlink href="/achievements">Achievements</Navlink>
      </li>
      <li className="nav-item">
        <Navlink href="/alumni">Alumni</Navlink>
      </li>
      <li className="nav-item">
        <Navlink href="/notifications">Notifications</Navlink>
      </li>
      <li className="nav-item">
        <Navlink href="/contact">contact</Navlink>
      </li>
      <li className="nav-item">
        <Navlink href="/about">about us</Navlink>
      </li>
      <li className="nav-item">
        <Navlink href="/sign-in">Admin</Navlink>
      </li>
      {btnPosition ? null : (
        <li className="nav-item">
          <Navlink href="/joinus">
            <span className="nav-link common_btn">
                JOIN US
            </span>
          </Navlink>
        </li>
      )}
    </ul>
    {btnPosition ? (
      <a className="common_btn_2 ms-auto" href="#">
        join us
      </a>
    ) : null}
  </div>
  );
};

export default NavigationSection;
