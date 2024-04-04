"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function updateEmployee() {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeDescription, setEmployeeDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // Assuming you receive the ID of the employee you want to update from props or query params
    const employeeIdToUpdate = ''; // Set the ID of the employee you want to update here

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedImage) {
            toast.error("Please select an image.");
            return;
        }
        try {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('name', employeeName);
            formData.append('description', employeeDescription);

            // Assuming you have an API endpoint for updating an employee with a specific ID
            const response = await axios.put(`/api/updateEmployee/${employeeIdToUpdate}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success(response.data.message);
        } catch (error: any) {
            toast.error(error.response.data.message);
        } finally {
            setEmployeeName('');
            setEmployeeDescription('');
            setSelectedImage(null);
        }
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Update Employee</h3>
                <hr />
                <div className="card mt-4 p-4 border-0" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="employeeName" className="form-label">Employee Name</label>
                            <input type="text" className="form-control" id="employeeName" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Enter employee name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeDescription" className="form-label">Employee Description</label>
                            <textarea className="form-control" id="employeeDescription" rows={5} value={employeeDescription} onChange={(e) => setEmployeeDescription(e.target.value)} placeholder="Enter employee description" required></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeImage" className="form-label">Employee Image</label>
                            <input type="file" className="form-control" id="employeeImage" accept="image/jpeg, image/jpg, image/png" onChange={handleFileChange} required />
                            <span className="text-muted" style={{ fontSize: 'small' }}>Only JPEG, JPG, PNG images are allowed</span>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link href="/admin/staffleaderboard/manageleaderboard" className="btn btn-dark me-md-2">
                                Back
                            </Link>
                            <button type="submit" className="btn btn-primary me-md-2">Update Employee</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
