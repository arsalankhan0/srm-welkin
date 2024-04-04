"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link';


export default function NoticeBoard() {
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeDescription, setNoticeDescription] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/addNotice', {
                title: noticeTitle,
                description: noticeDescription
            });

            toast.success(response.data.message);
        }
        catch (error: any) {

            toast.error(error.response.data.message);
        }
        finally {
            setNoticeTitle('');
            setNoticeDescription('');
        }
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Notice Board</h3>
                <hr />
                <div className="card mt-4 p-4 border-0" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="noticeTitle" className="form-label">Notice Title</label>
                            <input type="text" className="form-control" id="noticeTitle" value={noticeTitle} onChange={(e) => setNoticeTitle(e.target.value)} placeholder="Enter notice title" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="noticeDescription" className="form-label">Notice Description</label>
                            <textarea className="form-control" id="noticeDescription" rows={5} value={noticeDescription} onChange={(e) => setNoticeDescription(e.target.value)} placeholder="Enter notice description" required></textarea>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link href="/admin/noticeboard/managenotice"
                                className="btn btn-dark me-md-2">Manage Notices
                            </Link>
                            <button type="submit" className="btn btn-primary me-md-2">Add Notice</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
