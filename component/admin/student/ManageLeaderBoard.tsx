"use client"
import Layout from "@/component/admin/Layout/Layout";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import Image from 'next/image';

const ManageLeaderboard = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Student 1', award: 'Award 1', class: 'Class 1', imageUrl: '/images/team_1.jpg' },
        { id: 2, name: 'Student 2', award: 'Award 2', class: 'Class 2', imageUrl: '/images/team_2.jpg' },
        { id: 3, name: 'Student 3', award: 'Award 3', class: 'Class 3', imageUrl: '/images/team_3.jpg' },
    ]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    useEffect(() => {
        // Fetch students from the API when needed
        // fetchStudents();
    }, []);

    // Function to fetch students from the API
    const fetchStudents = async () => {
        try {
            const response = await axios.get('/api/students');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    // Function to handle student deletion
    const handleDelete = async (id:any) => {
        try {
            // Placeholder for API call to delete student
            // await axios.delete(`/api/students/${id}`);
            setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
            toast.success('Student deleted successfully');
        } catch (error) {
            console.error('Error deleting student:', error);
            toast.error('Failed to delete student');
        }
        setSelectedStudentId(null);
        setShowConfirmationModal(false);
    };

    // Function to open confirmation modal for student deletion
    const openConfirmationModal = (id:any) => {
        setSelectedStudentId(id);
        setShowConfirmationModal(true);
    };

    // Function to close confirmation modal
    const closeConfirmationModal = () => {
        setSelectedStudentId(null);
        setShowConfirmationModal(false);
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Manage Students Leader Board</h3>
                <hr />
                <div className="table-responsive mt-4" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Student Image</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Student Award</th>
                                <th scope="col">Student Class</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={student.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img src={student.imageUrl} alt="img" className="leader_board_img"/>
                                    </td>
                                    <td>{student.name}</td>
                                    <td>{student.award}</td>
                                    <td>{student.class}</td>
                                    <td>
                                        {/* <Link href={`/admin/studentleaderboard/updatestudent?id=${student.id}`}><RiEdit2Line className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="Edit" /></Link> */}
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(student.id)} title="Delete" />
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
                        body="Are you sure you want to delete this student from leader board?"
                        onCancel={closeConfirmationModal}
                        onDelete={() => handleDelete(selectedStudentId)}
                    />
                </>
            )}
        </Layout>
    );
};

export default ManageLeaderboard;
