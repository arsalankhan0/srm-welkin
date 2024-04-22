"use client"
import { AchievementType } from "@/types";
import Layout from "@/component/admin/Layout/Layout";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import apiConfig from '@/api.config.json';


const ManageAchievements = () => {
    const API_HOST = apiConfig.API_HOST;
    const [achievements, setAchievements] = useState<AchievementType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedAchievementId, setSelectedAchievementId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8;

    useEffect(() => {
        fetchAchievements();
    }, [currentPage]);

    // Function to fetch achievements from the API
    const fetchAchievements = async () => {
        setIsLoading(true);
        try 
        {
            const response = await axios.get(`${API_HOST}/getAllAchievements`);
            setAchievements(response.data.achievements.reverse());
        } 
        catch (error) 
        {
            console.error('Error fetching achievements:', error);
        }
        finally 
        {
            setIsLoading(false);
        }
    };

    // Function to handle achievement deletion
    const handleDelete = async (id:any) => {
        try 
        {
            await axios.delete(`${API_HOST}/deleteAchievementById/${id}`);
            setAchievements(prevAchievements => prevAchievements.filter(achievement => achievement._id !== id));
            toast.success('Achievement deleted successfully');
        } 
        catch (error) 
        {
            toast.error('Failed to delete achievement! Please try again later.');
            console.error('Error deleting achievement:', error);
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

    // Get the current page of notifications based on currentPage and perPage
    const getCurrentPageRecords = () => {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        return achievements.slice(startIndex, endIndex);
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
                            {isLoading && <tr className='text-center'><td colSpan={4}>Loading achievements...</td></tr>}
                            {getCurrentPageRecords().map((achievement, index) => (
                                <tr key={achievement._id}>
                                    <th scope="row">{(currentPage - 1) * perPage + index + 1}</th>
                                    <td>
                                        <img src={achievement.image} alt="Achievement" className="leader_board_img"/>
                                    </td>
                                    <td>{achievement.title}</td>
                                    <td>
                                        {/* <Link href={`/admin/achievements/updateachievement?id=${achievement.id}`}><RiEdit2Line className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="Edit" /></Link> */}
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(achievement._id)} title="Delete"/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <nav aria-label="Page navigation mt-5">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                        </li>
                        {Array.from({ length: Math.ceil(achievements.length / perPage) }, (_, i) => (
                            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === Math.ceil(achievements.length / perPage) ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </li>
                    </ul>
                </nav>
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
