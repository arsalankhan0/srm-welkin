"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useEffect, useState } from "react";
import { RiEyeLine, RiDeleteBinLine } from "react-icons/ri";
import Link from 'next/link';
import { toast } from "react-toastify";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import apiConfig from '@/api.config.json';
import { JoinType } from "@/types";
import axios from "axios";
import { useRouter } from 'next/navigation';

const JoinRequests = () => {

    const API_HOST = apiConfig.API_HOST;
    const [joinRequests, setJoinRequests] = useState<JoinType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedJoinReqtId, setSelectedJoinReqId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8;
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
            fetchRequests();
        }
    }, [currentPage]);

    const fetchRequests = async () => {
        setIsLoading(true);
        try 
        {
            const response = await axios.get(`${API_HOST}/getallforms`);
            setJoinRequests(response.data.reverse());
        } 
        catch (error) 
        {
            console.error('Error fetching Forms:', error);
            toast.error('Failed to fetch Join Requests!');
        }
        finally 
        {
            setIsLoading(false);
        }
    };

     // Function to handle Join Request deletion
     const handleDelete = async (id:any) => {
        try 
        {
            await axios.delete(`${API_HOST}/deletebyId/${id}`);
            setJoinRequests(prevJoinReq => prevJoinReq.filter(joinRequests => joinRequests._id !== id));
            toast.success('Request deleted successfully');
        } 
        catch (error) 
        {
            console.error('Error deleting Join Request:', error);
            toast.error('Failed to delete Join Request!');
        }
        setSelectedJoinReqId(null);
        setShowConfirmationModal(false);
    };

    // Function to open confirmation modal for Join Request deletion
    const openConfirmationModal = (id:any) => {
        setSelectedJoinReqId(id);
        setShowConfirmationModal(true);
    };

    // Function to close confirmation modal
    const closeConfirmationModal = () => {
        setSelectedJoinReqId(null);
        setShowConfirmationModal(false);
    };

    // Get the current page of notifications based on currentPage and perPage
    const getCurrentPageRecords = () => {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        return joinRequests.slice(startIndex, endIndex);
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Join Requests</h3>
                <hr />
                <div className="table-responsive mt-4" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Position Applied</th>
                                <th scope="col">Qualification</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {joinRequests.length === 0 && !isLoading && (
                                <tr className='text-center'>
                                    <td colSpan={5}>No join requests found</td>
                                </tr>
                            )}
                            {isLoading && <tr className='text-center'><td colSpan={5}>Loading Requests...</td></tr>}
                            {joinRequests.length > 0 && getCurrentPageRecords().map((request, index) => (
                                <tr key={request._id}>
                                    <th scope="row">{(currentPage - 1) * perPage + index + 1}</th>
                                    <td>{request.fullName}</td>
                                    <td>{request.position}</td>
                                    <td>{request.qualification}</td>
                                    <td>
                                        <Link href={`/admin/joinus/viewfull?id=${request._id}`}><RiEyeLine className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="View Full Details" /></Link>
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(request._id)} title="Delete" />
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
                        {Array.from({ length: Math.ceil(joinRequests.length / perPage) }, (_, i) => (
                            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === Math.ceil(joinRequests.length / perPage) ? 'disabled' : ''}`}>
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
                        body="Are you sure you want to delete this Join Request?"
                        onCancel={closeConfirmationModal}
                        onDelete={() => handleDelete(selectedJoinReqtId)}
                    />
                </>
            )}
        </Layout>
    );
};

export default JoinRequests;
