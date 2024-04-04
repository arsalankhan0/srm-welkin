"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function StudentLeaderboard() {
    const [studentName, setStudentName] = useState('');
    const [studentAward, setStudentAward] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

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
        try 
        {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('name', studentName);
            formData.append('award', studentAward);
            formData.append('class', studentClass);

            const response = await axios.post('/api/addStudent', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success(response.data.message);
        } 
        catch (error: any) 
        {
            toast.error(error.response.data.message);
        } 
        finally 
        {
            setStudentName('');
            setStudentAward('');
            setStudentClass('');
            setSelectedImage(null);
        }
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Add Student</h3>
                <hr />
                <div className="card mt-4 p-4 border-0" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="studentName" className="form-label">Student Name</label>
                            <input type="text" className="form-control" id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Enter student name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="studentAward" className="form-label">Student Award</label>
                            <input type="text" className="form-control" id="studentAward" value={studentAward} onChange={(e) => setStudentAward(e.target.value)} placeholder="Enter student award" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="studentClass" className="form-label">Student Class</label>
                            <input type="text" className="form-control" id="studentClass" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} placeholder="Enter student class" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="studentImage" className="form-label">Student Image</label>
                            <input type="file" className="form-control" id="studentImage" accept="image/jpeg, image/jpg, image/png" onChange={handleFileChange} required />
                            <span className="text-muted" style={{ fontSize: 'small' }}>Only JPEG, JPG, PNG images are allowed</span>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link href="/admin/studentleaderboard/manageleaderboard" className="btn btn-dark me-md-2">
                                Manage Leader board
                            </Link>
                            <button type="submit" className="btn btn-primary me-md-2">Add Student</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
