
"use client";
import React from "react";
import Link from "next/link";
import { FaUser, FaSignOutAlt, FaChartBar, FaBullhorn, FaUserGraduate, FaTrophy, FaUserFriends, FaUserPlus } from "react-icons/fa";


const SideNav = () => {

    return (
        <div className="nav flex-column text-white w-100">
                <label className="m-3 d-flex justify-content-center">
                    <p className="logo">
                        <img src="/images/UserIcon.png" alt="logo" />
                        <span className="active"></span>
                    </p>
                </label>
                <div>
                    <Link href="/admin" className="nav-link text-light">
                        <FaChartBar className="me-2" />
                            Dashboard
                    </Link>
                    <Link href="/admin/noticeboard" className="nav-link text-light">
                        <FaBullhorn className="me-2" />
                            Notice Board
                    </Link>
                    <Link href="/admin/staffleaderboard" className="nav-link text-light">
                        <FaUser className="me-2" />
                            Staff Leader Board
                    </Link>
                    <Link href="/admin/studentleaderboard" className="nav-link text-light">
                        <FaUserGraduate className="me-2" />
                            Student Leader Board
                    </Link>
                    <Link href="/admin/achievements" className="nav-link text-light">
                        <FaTrophy className="me-2" />
                            Achievements
                    </Link>
                    <Link href="/admin/alumni" className="nav-link text-light">
                        <FaUserFriends className="me-2" />
                            Alumni
                    </Link>
                    <Link href="/admin/joinus" className="nav-link text-light">
                        <FaUserPlus className="me-2" />
                            Join Requests
                    </Link>
                    <hr />
                    <Link href="/admin/logout" className="nav-link text-light">
                        <FaSignOutAlt className="me-2" />
                            Logout
                    </Link>
                </div>
        </div>
    );
};

export default SideNav;
