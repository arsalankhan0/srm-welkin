"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useState } from "react";
import { RiEyeLine, RiDeleteBinLine } from "react-icons/ri";
import Link from 'next/link';
import { toast } from "react-toastify";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";

const JoinRequests = () => {

    const [joinRequests, setJoinRequests] = useState([
        { id: 1, name: "John Doe", positionApplied: "Software Developer", qualification: "Bachelor's in Computer Science" },
        { id: 2, name: "Jane Doe", positionApplied: "Data Analyst", qualification: "Master's in Statistics" },
        { id: 3, name: "Alice Smith", positionApplied: "Graphic Designer", qualification: "Bachelor's in Fine Arts" },
    ]);

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedJoinReqtId, setSelectedJoinReqId] = useState(null);
     // Function to handle Join Request deletion
     const handleDelete = async (id:any) => {
        try {
            // Placeholder for API call to delete Join Request
            // await axios.delete(`/api/joinus/${id}`);
            setJoinRequests(prevJoinReq => prevJoinReq.filter(joinRequests => joinRequests.id !== id));
            toast.success('Request deleted successfully');
        } catch (error) {
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
                            {joinRequests.map((request, index) => (
                                <tr key={request.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{request.name}</td>
                                    <td>{request.positionApplied}</td>
                                    <td>{request.qualification}</td>
                                    <td>
                                        <Link href={`/admin/joinus/viewfull?id=${request.id}`}><RiEyeLine className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="View Full Details" /></Link>
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(request.id)} title="Delete" />
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
