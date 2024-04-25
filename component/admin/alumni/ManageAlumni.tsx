"use client"
import { AlumniType } from "@/types";
import Layout from "@/component/admin/Layout/Layout";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { RiEdit2Line, RiDeleteBinLine, RiEyeLine } from 'react-icons/ri';
import apiConfig from '@/api.config.json';
import { useRouter } from 'next/navigation';

const ManageAlumni = () => {
    const API_HOST = apiConfig.API_HOST;
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedAlumniId, setSelectedAlumniId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8;
    const router = useRouter();
    
    const [alumni, setAlumni] = useState<AlumniType[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const expirationTime = localStorage.getItem('expirationTime');

        if (!token || !expirationTime || new Date().getTime() > parseInt(expirationTime)) 
        {
            router.push('/sign-in');
        } 
        else 
        {
            fetchAlumni();
        }
    }, [currentPage]);

    const fetchAlumni = async () => {
        setIsLoading(true);
        try 
        {
            const response = await axios.get(`${API_HOST}/getAllAlumniForms`);
            setAlumni(response.data.alumniForms.reverse());
        } 
        catch (error) 
        {
            console.error('Error fetching alumni:', error);
            toast.error('Failed to fetch alumni');
        }
        finally 
        {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id:any) => {
        try 
        {
            await axios.delete(`${API_HOST}/deleteAlumniFormById/${id}`);
            setAlumni(prevAlumni => prevAlumni.filter(alumnus => alumnus._id !== id));
            toast.success('Alumni deleted successfully');
        } 
        catch (error) 
        {
            toast.error('Failed to delete alumni! Please try again later.');
            console.error('Error deleting alumni:', error);
        }
        setSelectedAlumniId(null);
        setShowConfirmationModal(false);
    };

    const openConfirmationModal = (id:any) => {
        setSelectedAlumniId(id);
        setShowConfirmationModal(true);
    };

    const closeConfirmationModal = () => {
        setSelectedAlumniId(null);
        setShowConfirmationModal(false);
    };

    // Get the current page of notifications based on currentPage and perPage
    const getCurrentPageRecords = () => {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        return alumni.slice(startIndex, endIndex);
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Manage Alumni</h3>
                <hr />
                <div className="table-responsive mt-4" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Image</th>
                                <th scope="col">Alumni Name</th>
                                <th scope="col">Batch</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && <tr className='text-center'><td colSpan={4}>Loading alumni...</td></tr>}
                            {getCurrentPageRecords().map((alumnus, index) => (
                                <tr key={alumnus._id}>
                                    <th scope="row">{(currentPage - 1) * perPage + index + 1}</th>
                                    <td>
                                        <img src={alumnus.image as string} style={{width: '50px', height: '50px'}} alt="img" />
                                    </td>
                                    <td>{alumnus.name}</td>
                                    <td>{alumnus.batch}</td>
                                    <td>
                                    <Link href={`/admin/alumni/viewfull?id=${alumnus._id}`}><RiEyeLine className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="View Full Details" /></Link>
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(alumnus._id)} title="Delete"/>
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
                        {Array.from({ length: Math.ceil(alumni.length / perPage) }, (_, i) => (
                            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === Math.ceil(alumni.length / perPage) ? 'disabled' : ''}`}>
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
                        body="Are you sure you want to delete this alumni?"
                        onCancel={closeConfirmationModal}
                        onDelete={() => handleDelete(selectedAlumniId)}
                    />
                </>
            )}
        </Layout>
    );
};

export default ManageAlumni;
