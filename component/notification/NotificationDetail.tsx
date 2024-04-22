"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import apiConfig from '@/api.config.json';

const NotificationDetail = () => {
    const API_HOST = apiConfig.API_HOST;
    const [notification, setNotification] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const searchParams = useSearchParams();
    const id: string | null = searchParams.get('id');

    useEffect(() => {
        const fetchNotification = async () => {
            if (id && !Array.isArray(id)) {
                setIsLoading(true);
                try 
                {
                    const response = await axios.get(`${API_HOST}/getNotificationById/${id}`);
                    setNotification(response.data.notification);
                } 
                catch (error) 
                {
                    console.error('Error fetching notification:', error);
                } 
                finally 
                {
                    setIsLoading(false);
                }
            }
        };

        fetchNotification();
    }, [id]);

     // Function to format date in dd-mm-yyyy format
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}-${monthNames[monthIndex]}-${year}`;
    };

    return (
        <div className="container mt_110">
            <div className="tf__heading_area my-4">
                <h5 className='fs-3'>Notification Details</h5>
            </div>
            {isLoading && <p className='text-center'>Loading...</p>}
            {notification && (
                <div className="card ">
                    <div className="card-body">
                        <h3 className="card-title">{notification.NoticeTitle}</h3>
                        <p className="card-text mt-3">{notification.NoticeDescription}</p>
                        {/* {notification.attachment && (
                            <a href={notification.attachment} target="_blank" className="text-primary mt-3">View Attachment (PDF)</a>
                        )} */}
                        <p className="card-text text-muted fst-italic mt-3">Date: {formatDate(notification.createdAt)}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotificationDetail;

