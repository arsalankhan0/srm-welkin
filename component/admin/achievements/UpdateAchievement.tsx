"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import apiConfig from '@/api.config.json';

export default function UpdateAchievement() {
    const [achievementTitle, setAchievementTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const API_HOST = apiConfig.API_HOST;

    // Assuming you receive the ID of the achievement you want to update from props or query params
    const achievementIdToUpdate = ''; // Set the ID of the achievement you want to update here

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
            formData.append('title', achievementTitle);

            // Assuming you have an API endpoint for updating an achievement with a specific ID
            const response = await axios.put(`${API_HOST}/api/updateAchievement/${achievementIdToUpdate}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success(response.data.message);
        } catch (error: any) {
            toast.error(error.response.data.message);
        } finally {
            setAchievementTitle('');
            setSelectedImage(null);
        }
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Update Achievement</h3>
                <hr />
                <div className="card mt-4 p-4 border-0" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="achievementTitle" className="form-label">Achievement Title</label>
                            <input type="text" className="form-control" id="achievementTitle" value={achievementTitle} onChange={(e) => setAchievementTitle(e.target.value)} placeholder="Enter achievement title" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="achievementImage" className="form-label">Achievement Image</label>
                            <input type="file" className="form-control" id="achievementImage" accept="image/jpeg, image/jpg, image/png" onChange={handleFileChange} required />
                            <span className="text-muted" style={{ fontSize: 'small' }}>Only JPEG, JPG, PNG images are allowed</span>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link href="/admin/achievements/manageachievements" className="btn btn-dark me-md-2">
                                Back
                            </Link>
                            <button type="submit" className="btn btn-primary me-md-2">Update Achievement</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
