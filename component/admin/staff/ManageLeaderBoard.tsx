"use client"
import Layout from "@/component/admin/Layout/Layout";
import ConfirmModal from "@/component/confirmationmodals/ConfirmModal";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

const ManageLeaderBoard = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Employee 1', description: 'This is employee 1', imageUrl: '/images/team_1.jpg' },
        { id: 2, name: 'Employee 2', description: 'This is employee 2', imageUrl: '/images/team_2.jpg' },
        { id: 3, name: 'Employee 3', description: 'This is employee 3', imageUrl: '/images/team_3.jpg' },
    ]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    useEffect(() => {
        // Fetch employees from the API when needed
        // fetchEmployees();
    }, []);

    // Function to fetch employees from the API
    const fetchEmployees = async () => {
        try 
        {
            const response = await axios.get('/api/employees');
            setEmployees(response.data);
        } 
        catch (error) 
        {
            console.error('Error fetching employees:', error);
        }
    };

    // Function to handle employee deletion
    const handleDelete = async (id:any) => {
        try {
            // Placeholder for API call to delete employee
            // await axios.delete(`/api/employees/${id}`);
            setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
            toast.success('Employee deleted successfully');
        } catch (error) {
            console.error('Error deleting employee:', error);
            toast.error('Failed to delete employee');
        }
        setSelectedEmployeeId(null);
        setShowConfirmationModal(false);
    };

    // Function to open confirmation modal for employee deletion
    const openConfirmationModal = (id:any) => {
        setSelectedEmployeeId(id);
        setShowConfirmationModal(true);
    };

    // Function to close confirmation modal
    const closeConfirmationModal = () => {
        setSelectedEmployeeId(null);
        setShowConfirmationModal(false);
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Manage Employees Leader Board</h3>
                <hr />
                <div className="table-responsive mt-4" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Employee Image</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Employee Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={employee.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img src={employee.imageUrl} alt="img" className="leader_board_img"/>
                                    </td>
                                    <td>{employee.name}</td>
                                    <td>{employee.description}</td>
                                    <td>
                                        {/* <Link href={`/admin/staffleaderboard/updateemployee?id=${employee.id}`}><RiEdit2Line className="me-2 fs-4" style={{ cursor: "pointer", color: "blue" }} title="Edit" /></Link> */}
                                        <RiDeleteBinLine className="fs-4" style={{ cursor: "pointer", color: "red" }} onClick={() => openConfirmationModal(employee.id)} title="Delete" />
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
                        body="Are you sure you want to delete this employee from leader board?"
                        onCancel={closeConfirmationModal}
                        onDelete={() => handleDelete(selectedEmployeeId)}
                    />
                </>
            )}
        </Layout>
    );
};

export default ManageLeaderBoard;
