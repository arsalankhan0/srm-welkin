"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './NoticeBoard.module.css';
import Navlink from '../navbar/Navlink';
import apiConfig from '@/api.config.json';

interface Notification {
    _id: string;
    NoticeTitle: string;
    NoticeDescription: string;
    createdAt: string;
    __v: number;
}

const NoticeBoard = () => {
    const API_HOST = apiConfig.API_HOST;
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchNotifications = async () => {
            setIsLoading(true);
            try 
            {
                const response = await axios.get(`${API_HOST}/fetchNotifications`);
                const sortedNotifications:Notification[] = response.data.notifications.sort((a:Notification, b:Notification) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                setNotifications(sortedNotifications);
            } 
            catch (error) 
            {
                console.error('Error fetching notifications:', error);
            }
            finally
            {
                setIsLoading(false);
            }
        };

        fetchNotifications();
    }, []);

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
        <>
            <div className="tf__heading_area mb_15 mt_100">
                <h5 className='fs-3'>Notifications</h5>
            </div>
            <div className='container'>
                <div className={styles.noticeBoard}>
                    <ul className={styles.noticeList}>
                    {isLoading && <p className='text-center'>Loading notifications...</p>}
                        {notifications && notifications.map(notification => (
                        <Navlink href={`/notifications/notificationdetails?id=${notification._id}`}>
                            <li key={notification._id} className={styles.notice}>
                                <div className={styles.noticeContent}>
                                    <h3 className={styles.noticeTitle}>{notification.NoticeTitle}</h3>
                                    {/* <p className={styles.noticeText}>{notification.NoticeDescription}</p> */}
                                    <p className={styles.noticeDate}>Date: {formatDate(notification.createdAt)}</p>
                                </div>
                            </li>
                        </Navlink>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NoticeBoard;
