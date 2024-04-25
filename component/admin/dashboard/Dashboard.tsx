"use client"
import React, { useState, useEffect } from 'react';
import Layout from "@/component/admin/Layout/Layout";
import axios from 'axios';
import { FaBullhorn, FaUserTie, FaGraduationCap, FaTrophy, FaUserPlus, FaUserFriends, FaSync } from 'react-icons/fa';
import apiConfig from '@/api.config.json';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const API_HOST = apiConfig.API_HOST;
    const [totalNotices, setTotalNotices] = useState(0);
    const [totalStaff, setTotalStaff] = useState(0);
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalAchievements, setTotalAchievements] = useState(0);
    const [totalJoinUs, setTotalJoinUs] = useState(0);
    const [totalAlumni, setTotalAlumni] = useState(0);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const expirationTime = localStorage.getItem('expirationTime');

        if (!token || !expirationTime || new Date().getTime() > parseInt(expirationTime)) 
        {
            router.push('/sign-in');
        } 
        else 
        {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        try 
        {
            setLoading(true);
            const [noticesResponse, staffResponse, studentsResponse, achievementsResponse, joinUsResponse, alumniResponse] = await Promise.all([
                axios.get(`${API_HOST}/getAllNotifications`),
                axios.get(`${API_HOST}/getAllStaffMembers`),
                axios.get(`${API_HOST}/getAllStudents`),
                axios.get(`${API_HOST}/getAllAchievements`),
                axios.get(`${API_HOST}/getallforms`),
                axios.get(`${API_HOST}/getAllAlumniForms`)
            ]);

            setTotalNotices(noticesResponse.data.notifications.length);
            setTotalStaff(staffResponse.data.length);
            setTotalStudents(studentsResponse.data.length);
            setTotalAchievements(achievementsResponse.data.achievements.length);
            setTotalJoinUs(joinUsResponse.data.length);
            setTotalAlumni(alumniResponse.data.alumniForms.length);
        } 
        catch (error) 
        {
            console.error('Error fetching data:', error);
        } 
        finally 
        {
            setLoading(false);
        }
    };

    const handleRefresh = () => {
        fetchData();
    };

    return (
        <Layout>
            <div className="container-fluid">
                <div className='d-flex align-items-center justify-content-between mt-2'>
                    <h3>Dashboard</h3>
                    <FaSync className={`mx-5 fs-5 ${loading ? 'spin' : ''}`} onClick={handleRefresh} style={{cursor: 'pointer'}} title='Refresh' />
                </div>
                <hr />
                <div className="row mt-4">
                    <Link href="/admin/noticeboard/managenotice" className='col-md-4 '>
                        <DashboardCard title="Total Notices" count={totalNotices} icon={<FaBullhorn />} color="primary" />
                    </Link>
                    <Link href="/admin/staffleaderboard/manageleaderboard" className='col-md-4 '>
                        <DashboardCard title="Total Staff in Leader Board" count={totalStaff} icon={<FaUserTie />} color="success" />
                    </Link>
                    <Link href="/admin/studentleaderboard/manageleaderboard" className='col-md-4 '>
                        <DashboardCard title="Total Students in Leader Board" count={totalStudents} icon={<FaGraduationCap />} color="info" />
                    </Link>
                </div>
                <div className="row">
                    <Link href="/admin/achievements/manageachievements" className='col-md-4'>
                        <DashboardCard title="Total Achievements" count={totalAchievements} icon={<FaTrophy />} color="warning" />
                    </Link>
                    <Link href="/admin/joinus" className='col-md-4'>
                        <DashboardCard title="Join Requests" count={totalJoinUs} icon={<FaUserPlus />} color="secondary" />
                    </Link>
                    <Link href="/admin/alumni/managealumni" className='col-md-4'>
                        <DashboardCard title="Alumni Network" count={totalAlumni} icon={<FaUserFriends />} color="danger" />
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

const DashboardCard = ({ title, count, icon, color}:any) => (
    <div className="mb-4">
        <div className={`card mb-4 shadow h-100 bg-${color}`}>
            <div className="card-body text-white d-flex flex-column justify-content-center">
                <h5 className="card-title fw-bold text-center">{title}</h5>
                <div className="d-flex justify-content-center align-items-center mb-2">
                    {icon}
                    <p className="card-text fw-bold text-center fs-3 ms-2">{count}</p>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;
