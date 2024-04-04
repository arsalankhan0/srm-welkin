"use client"
import Layout from "@/component/admin/Layout/Layout";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import apiConfig from '@/api.config.json';
const API_HOST = apiConfig.API_HOST;

const ManageAchievements = () => {
    const [achievements, setAchievements] = useState([
        { id: 1, title: 'Achievement 1', imageUrl: '/images/team_1.jpg' },
        { id: 2, title: 'Achievement 2', imageUrl: '/images/team_2.jpg' },
        { id: 3, title: 'Achievement 3', imageUrl: '/images/teamx_3.jpg' },
    ]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedAchievementId, setSelectedAchievementId] = useState(null);

    useEffect(() => {
        // Fetch achievements from the API when needed
        // fetchAchievements();
    }, []);

    // Function to fetch achievements from the API
    const fetchAchievements = async () => {
        try {
            const response = await axios.get(`${API_HOST}/api/achievements`);
            setAchievements(response.data);
        } catch (error) {
            console.error('Error fetching achievements:', error);
        }
    };

    // Function to handle achievement deletion
    const handleDelete = async (id:any) => {
        try {
            // Placeholder for API call to delete achievement
            // await axios.delete(`/api/achievements/${id}`);
            setAchievements(prevAchievements => prevAchievements.filter(achievement => achievement.id !== id));
            toast.success('Achievement deleted successfully');
        } catch (error) {
            console.error('Error deleting achievement:', error);
            toast.error('Failed to delete achievement');
        }
        setSelectedAchievementId(null);
        setShowConfirmationModal(false);
    };

    // Function to open confirmation modal for achievement deletion
    const openConfirmationModal = (id:any) => {
        setSelectedAchievementId(id);
        setShowConfirmationModal(true);
    };

    // Function to close confirmation modal
    const closeConfirmationModal = () => {
        setSelectedAchievementId(null);
        setShowConfirmationModal(false);
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Manage Achievements</h3>
                <hr />
                <div className="table-responsive mt-4" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Achievement Image</th>
                                <th scope="col">Achievement Title</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {achievements.map((achievement, index) => (
                                <tr key={achievement.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img src={achievement.imageUrl} alt="Achievement" className="leader_board_img"/>
                                    </td>
                                    <td>{achievement.title}</td>
                                    <td>
                                        {/* <Link href={`/admin/achievements/updateachievement?id=${achievement.id}`}><RiEdit2Line className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="Edit" /></Link> */}
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(achievement.id)} title="Delete"/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showConfirmationModal && (
                <>
                    <ConfirmModal 
                        title="Confirm Deletion"
                        body="Are you sure you want to delete this achievement?"
                        onCancel={closeConfirmationModal}
                        onDelete={() => handleDelete(selectedAchievementId)}
                    />
                </>
            )}
        </Layout>
    );
};

export default ManageAchievements;
