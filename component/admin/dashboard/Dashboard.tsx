"use client"
import React, { useState } from 'react';
import Layout from "@/component/admin/Layout/Layout";
import { useEffect } from 'react';
import axios from 'axios';
import { FaBullhorn, FaUserTie, FaGraduationCap, FaTrophy, FaUserPlus, FaUserFriends, FaSync } from 'react-icons/fa';

const Dashboard = () => {
    const [totalNotices, setTotalNotices] = useState(0);
    const [totalStaff, setTotalStaff] = useState(0);
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalAchievements, setTotalAchievements] = useState(0);
    const [totalJoinUs, setTotalJoinUs] = useState(0);
    const [totalAlumni, setTotalAlumni] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try 
        {
            setLoading(true);
            const noticesResponse = await axios.get('/api/notices');
            const staffResponse = await axios.get('/api/staff');
            const studentsResponse = await axios.get('/api/students');
            const achievementsResponse = await axios.get('/api/achievements');
            const joinUsResponse = await axios.get('/api/join-us');
            const alumniResponse = await axios.get('/api/alumni');

            setTotalNotices(noticesResponse.data.length);
            setTotalStaff(staffResponse.data.length);
            setTotalStudents(studentsResponse.data.length);
            setTotalAchievements(achievementsResponse.data.length);
            setTotalJoinUs(joinUsResponse.data.length);
            setTotalAlumni(alumniResponse.data.length);
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
                    <DashboardCard title="Total Notices" count={totalNotices} icon={<FaBullhorn />} color="primary" />
                    <DashboardCard title="Total Staff in Leader Board" count={totalStaff} icon={<FaUserTie />} color="success" />
                    <DashboardCard title="Total Students in Leader Board" count={totalStudents} icon={<FaGraduationCap />} color="info" />
                </div>
                <div className="row ">
                    <DashboardCard title="Total Achievements" count={totalAchievements} icon={<FaTrophy />} color="warning" />
                    <DashboardCard title="Join Requests" count={totalJoinUs} icon={<FaUserPlus />} color="secondary" />
                    <DashboardCard title="Alumni Network" count={totalAlumni} icon={<FaUserFriends />} color="danger" />
                </div>
            </div>
        </Layout>
    );
};

const DashboardCard = ({ title, count, icon, color }:any) => (
    <div className="col-md-4 mb-4">
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
