"use client"
import Layout from "@/component/admin/Layout/Layout";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

const ManageNotice = () => {
    const [notices, setNotices] = useState([
        { id: 1, title: 'Notice 1', description: 'This is notice 1' },
        { id: 2, title: 'Notice 2', description: 'This is notice 2' },
        { id: 3, title: 'Notice 3', description: 'This is notice 3' },
    ]);
    const [Id, setId] = useState<number | null>(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    
    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        try {
            const response = await axios.get('/api/notices');
            setNotices(response.data);
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };

    const handleDelete = async () => {
        if (Id !== null) {
            try {
                await axios.delete(`/api/notices/${Id}`);
                setNotices(prevNotices => prevNotices.filter(notice => notice.id !== Id));
                toast.success('Notice deleted successfully');
            } catch (error) {
                console.error('Error deleting notice:', error);
                toast.error('Failed to delete notice');
            }
            setId(null);
            setShowConfirmationModal(false);
        }
    };

    const openConfirmationModal = (id: number) => {
        setId(id);
        setShowConfirmationModal(true);
    };

    const closeConfirmationModal = () => {
        setId(null);
        setShowConfirmationModal(false);
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
                            {notices.map((notice, index) => (
                                <tr key={notice.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{notice.title}</td>
                                    <td>{notice.description}</td>
                                    <td>
                                        {/* <Link href={`/admin/noticeboard/updatenotice?id=${notice.id}`}><RiEdit2Line className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="Edit" /></Link> */}
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(notice.id)} title="Delete" />
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
