"use client"
import Layout from "@/component/admin/Layout/Layout";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RiDeleteBinLine } from 'react-icons/ri';
import apiConfig from '@/api.config.json';

interface Notification {
    _id: string;
    NoticeTitle: string;
    NoticeDescription: string;
    createdAt: string;
    __v: number;
}

const ManageNotice = () => {
    const API_HOST = apiConfig.API_HOST;
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Id, setId] = useState<string | null>(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8;

    useEffect(() => {
        fetchNotices();
    }, [currentPage]);

    const fetchNotices = async () => {
        setIsLoading(true);
        try 
        {
            const response = await axios.get(`${API_HOST}/fetchNotifications`);
            const sortedNotifications: Notification[] = response.data.notifications.sort((a: Notification, b: Notification) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setNotifications(sortedNotifications);
        } 
        catch (error) 
        {
            console.error('Error fetching notices:', error);
        } 
        finally 
        {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (Id !== null) 
        {
            try 
            {
                await axios.delete(`${API_HOST}/deleteNotifications/${Id}`);
                setNotifications(prevNotices => prevNotices.filter(notice => notice._id !== Id));
                toast.success('Notice deleted successfully');
            } 
            catch (error) 
            {
                toast.error('Failed to delete notice! Please try again later.');
                console.error('Error deleting notice:', error);
            }
            setId(null);
            setShowConfirmationModal(false);
        }
    };

    const openConfirmationModal = (id: string) => {
        setId(id);
        setShowConfirmationModal(true);
    };

    const closeConfirmationModal = () => {
        setId(null);
        setShowConfirmationModal(false);
    };

    // Get the current page of notifications based on currentPage and perPage
    const getCurrentPageNotifications = () => {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        return notifications.slice(startIndex, endIndex);
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Manage Notice</h3>
                <hr />
                <div className="table-responsive mt-4" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Notice Title</th>
                                <th scope="col">Notice Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && <tr className='text-center'><td colSpan={4}>Loading notifications...</td></tr>}
                            {getCurrentPageNotifications().map((notice, index) => (
                                <tr key={notice._id}>
                                    <th scope="row">{(currentPage - 1) * perPage + index + 1}</th>
                                    <td>{notice.NoticeTitle}</td>
                                    <td>{notice.NoticeDescription}</td>
                                    <td>
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(notice._id)} title="Delete" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation mt-5">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                        </li>
                        {Array.from({ length: Math.ceil(notifications.length / perPage) }, (_, i) => (
                            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === Math.ceil(notifications.length / perPage) ? 'disabled' : ''}`}>
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
                        body="Are you sure you want to delete this notice?"
                        onCancel={closeConfirmationModal}
                        onDelete={handleDelete}
                    />
                </>
            )}
        </Layout>
    );
};

export default ManageNotice;
