"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useState, FormEvent, useRef, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import apiConfig from '@/api.config.json';
import { useRouter } from 'next/navigation';

export default function NoticeBoard() {
    const API_HOST = apiConfig.API_HOST;
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeDescription, setNoticeDescription] = useState('');
    const [attachment, setAttachment] =  useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const attachmentSize = 5;
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const expirationTime = localStorage.getItem('expirationTime');

        if (!token || !expirationTime || new Date().getTime() > parseInt(expirationTime)) {
            router.push('/sign-in');
        }
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         // Validating attachment
        if (attachment) 
            {
                if (!attachment.name.toLowerCase().endsWith(".pdf") && !attachment.name.toLowerCase().endsWith(".doc") && !attachment.name.toLowerCase().endsWith(".docx")) {
                    toast.error("Attachment must be in PDF or DOC format.", { position: "top-right" });
                    return;
                }

                if (attachment.size > attachmentSize * 1024 * 1024) {
                    toast.error(`Resume size should be less than ${attachmentSize} MB.`, { position: "top-right" });
                    return;
                }
            }
        try 
        {
            setLoading(true);

            const response = await axios.post(`${API_HOST}/addNotifications`, {
                NoticeTitle: noticeTitle,
                NoticeDescription: noticeDescription,
                pdf: attachment 
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            toast.success("Notification added successfully.");
        }
        catch (error: any) 
        {
            toast.error("Something went wrong! Please try again later.");
            console.log(error.response.data.message);
        }
        finally 
        {
            setLoading(false);
            setNoticeTitle('');
            setNoticeDescription('');
            if (fileInputRef.current) 
            {
                fileInputRef.current.value = "";
            }
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
                        <div className="tf__login_imput">
                        <label>Attachment (pdf/doc)</label>
                        <input
                            type="file"
                            accept=".pdf,.doc"
                            ref={fileInputRef}
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    setAttachment(e.target.files[0]);
                                }
                            }}
                        />
                    </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                            <Link href="/admin/noticeboard/managenotice"
                                className="btn btn-dark me-md-2">Manage Notices
                            </Link>
                            <button type="submit" className="btn btn-primary me-md-2" disabled={loading}>
                                {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                                {loading ? 'Adding Notice' : 'Add Notice'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
