"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useState, FormEvent, useRef, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import apiConfig from '@/api.config.json';
import { useRouter } from 'next/navigation';

export default function staffleaderboard() {
    const API_HOST = apiConfig.API_HOST;
    const [employeeName, setEmployeeName] = useState('');
    const [employeeDescription, setEmployeeDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const expirationTime = localStorage.getItem('expirationTime');

        if (!token || !expirationTime || new Date().getTime() > parseInt(expirationTime)) {
            router.push('/sign-in');
        }
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedImage) 
        {
            toast.error("Please select an image.");
            return;
        }
        const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedFormats.includes(selectedImage.type)) 
        {
            toast.error("Invalid image format. Only JPEG, JPG, PNG images are allowed.");
            return;
        }
        try 
        {
            setLoading(true);

            const formData = new FormData();
            formData.append('staffImage', selectedImage);
            formData.append('staffName', employeeName);
            formData.append('staffDescription', employeeDescription);

            const response = await axios.post(`${API_HOST}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success("Employee added Successfully to the leader board.");
        } 
        catch (error: any) 
        {
            toast.error("Something went wrong! Please try again later.");
            console.log(error.response.data.message);
        } 
        finally 
        {
            setLoading(false);
            setEmployeeName('');
            setEmployeeDescription('');
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Add Staff Member</h3>
                <hr />
                <div className="card mt-4 p-4 border-0" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="employeeName" className="form-label">Employee Name</label>
                            <input type="text" className="form-control" id="employeeName" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Enter employee name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeDescription" className="form-label">Description</label>
                            <textarea className="form-control" id="employeeDescription" rows={5} value={employeeDescription} onChange={(e) => setEmployeeDescription(e.target.value)} placeholder="Enter employee description" required></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeImage" className="form-label">Employee Image</label>
                            <input type="file" ref={fileInputRef} className="form-control" id="employeeImage" accept="image/jpeg, image/jpg, image/png" onChange={handleFileChange} required />
                            <span className="text-muted" style={{ fontSize: 'small' }}>Only JPEG, JPG, PNG images are allowed</span>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link href="/admin/staffleaderboard/manageleaderboard" className="btn btn-dark me-md-2">
                                Manage Leader board
                            </Link>
                            <button type="submit" className="btn btn-primary me-md-2" disabled={loading}>
                                {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                                {loading ? 'Adding Employee' : 'Add Employee'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
