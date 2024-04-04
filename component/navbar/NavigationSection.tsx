"use client";
import React from "react";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";
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
      {/* <li className="nav-item">
        <a className="nav-link">
          courses <i className="fa fa-angle-down"></i>
        </a>
        <ul className="tf__droap_menu">
          <li>
            <SubNavlink href="/courses">courses</SubNavlink>
          </li>
          <li>
            <SubNavlink href="/courses/modern-frontend-frameworks">
              courses details
            </SubNavlink>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          blogs <i className="fa fa-angle-down"></i>
        </a>
        <ul className="tf__droap_menu">
          <li>
            <SubNavlink href="/blog">blog</SubNavlink>
          </li>
          <li>
            <SubNavlink href="/blog/culinary-adventures-exploring-world-cuisines">
              blog details
            </SubNavlink>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          pages <i className="fa fa-angle-down"></i>
        </a>
        <ul className="tf__droap_menu">
          <li>
            <SubNavlink href="/events">event</SubNavlink>
          </li>
          <li>
            <SubNavlink href="/events/science-fair">event details</SubNavlink>
          </li>
          <li>
            <SubNavlink href="/team">team</SubNavlink>
          </li>
          <li>
            <SubNavlink href="/team/john-smith">team details </SubNavlink>
          </li>
          <li>
            <SubNavlink href="/faq">FAQs</SubNavlink>
          </li>
          <li>
            <SubNavlink href="/sign-in">sign in</SubNavlink>
          </li>
          <li>
            <SubNavlink href="/sign-up">sign up</SubNavlink>
          </li>
          <li>
            <SubNavlink href="/terms-condition">
              terms and condition
            </SubNavlink>
          </li>
          <li>
            <SubNavlink href="/privacy-policy">privacy policy</SubNavlink>
          </li>
        </ul>
      </li> */}
      <li className="nav-item">
        <Navlink href="/achievements">Achievements</Navlink>
      </li>
      <li className="nav-item">
        <Navlink href="/alumni">Alumni</Navlink>
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
