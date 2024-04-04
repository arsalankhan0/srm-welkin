"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import apiConfig from '@/api.config.json';

export default function Achievements() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [presentAddress, setPresentAddress] = useState('');
    const [designation, setDesignation] = useState('');
    const [batch, setBatch] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [testimonial, setTestimonial] = useState('');
    const API_HOST = apiConfig.API_HOST;

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
        try 
        {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('name', name);
            formData.append('address', address);
            formData.append('phoneNumber', phoneNumber);
            formData.append('presentAddress', presentAddress);
            formData.append('designation', designation);
            formData.append('batch', batch);
            formData.append('testimonial', testimonial);

            const response = await axios.post(`${API_HOST}/api/addAlumni`, formData, {
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
            // Resetting form fields after submission
            setName('');
            setAddress('');
            setPhoneNumber('');
            setPresentAddress('');
            setDesignation('');
            setBatch('');
            setTestimonial('');
            setSelectedImage(null);
        }
    };

    return (
        <Layout>
            <div className="container-fluid mb-3">
                <h3 className="mt-2">Add Alumni</h3>
                <hr />
                <div className="card mt-4 p-4 border-0" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter address" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="text" 
                                className="form-control" 
                                id="phoneNumber" 
                                value={phoneNumber} 
                                pattern="[0-9]{10}"
                                onChange={(e) => {
                                    const input = e.target.value;
                                    (input.match(/^[\d]{0,10}$/)) && setPhoneNumber(input);
                                }} 
                                placeholder="Enter phone number" 
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="presentAddress" className="form-label">Present Address</label>
                            <input type="text" className="form-control" id="presentAddress" value={presentAddress} onChange={(e) => setPresentAddress(e.target.value)} placeholder="Enter present address" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="designation" className="form-label">Designation</label>
                            <input type="text" className="form-control" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter designation" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="batch" className="form-label">Batch</label>
                            <input type="text" className="form-control" id="batch" value={batch} onChange={(e) => setBatch(e.target.value)} placeholder="Enter batch" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="testimonial" className="form-label">Testimonials</label>
                            <textarea className="form-control" id="testimonial" value={testimonial} onChange={(e) => setTestimonial(e.target.value)} placeholder="Enter testimonials" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Upload Photograph</label>
                            <input type="file" className="form-control" id="image" accept="image/jpeg, image/jpg, image/png" onChange={handleFileChange} required />
                            <span className="text-muted" style={{ fontSize: 'small' }}>Only JPEG, JPG, PNG images are allowed</span>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link href="/admin/alumni/managealumni" className="btn btn-dark me-md-2">
                                Manage Alumni
                            </Link>
                            <button type="submit" className="btn btn-primary me-md-2">Add Alumni</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
