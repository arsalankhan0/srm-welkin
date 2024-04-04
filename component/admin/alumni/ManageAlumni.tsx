"use client"
import Layout from "@/component/admin/Layout/Layout";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { RiEdit2Line, RiDeleteBinLine, RiEyeLine } from 'react-icons/ri';
import apiConfig from '@/api.config.json';
const API_HOST = apiConfig.API_HOST;

const ManageAlumni = () => {
    // const [alumni, setAlumni] = useState([]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedAlumniId, setSelectedAlumniId] = useState(null);
    
    const [alumni, setAlumni] = useState([
        {
            id: '1',
            image: '/images/team_1.jpg',
            name: 'arsalan',
            batch: '2022'
        },
        {
            id: '2',
            image: '/images/team_2.jpg',
            name: 'faiq',
            batch: '2012'
        },
    ]);

    useEffect(() => {
        fetchAlumni();
    }, []);

    const fetchAlumni = async () => {
        try {
            const response = await axios.get(`${API_HOST}/api/alumni`);
            setAlumni(response.data);
        } catch (error) {
            console.error('Error fetching alumni:', error);
            toast.error('Failed to fetch alumni');
        }
    };

    const handleDelete = async (id:any) => {
        try {
            // Placeholder for API call to delete alumni
            // await axios.delete(`/api/alumni/${id}`);
            setAlumni(prevAlumni => prevAlumni.filter(alumnus => alumnus.id !== id));
            toast.success('Alumni deleted successfully');
        } catch (error) {
            console.error('Error deleting alumni:', error);
            toast.error('Failed to delete alumni');
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
                            {alumni.map((alumnus, index) => (
                                <tr key={alumnus.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td><img src={alumnus.image} style={{width: '50px'}} alt="img" /></td>
                                    <td>{alumnus.name}</td>
                                    <td>{alumnus.batch}</td>
                                    <td>
                                    <Link href={`/admin/alumni/viewfull?id=${alumnus.id}`}><RiEyeLine className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="View Full Details" /></Link>
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(alumnus.id)} title="Delete"/>
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
