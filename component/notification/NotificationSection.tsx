"use client";
import React, { useRef, useEffect, useState } from 'react';
import './NoticeAnim.css';
import Navlink from '../navbar/Navlink';
import axios from 'axios';
import apiConfig from '@/api.config.json';

interface Notification {
    _id: string;
    NoticeTitle: string;
    NoticeDescription: string;
    createdAt: string;
    __v: number;
}

const NoticeBoard: React.FC = () => {
    const API_HOST = apiConfig.API_HOST;
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [isIntersecting, setIsIntersecting] = useState(false);
    const marqueeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (marqueeRef.current) {
            observer.observe(marqueeRef.current);
        }

        return () => {
            if (marqueeRef.current) {
                observer.unobserve(marqueeRef.current);
            }
        };
    }, []);


    useEffect(() => {
        const fetchNotifications = async () => {
            setIsLoading(true);
            try 
            {
                const response = await axios.get(`${API_HOST}/fetchNotifications`);
                const sortedNotifications:Notification[] = response.data.notifications.sort((a:Notification, b:Notification) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                const topFiveNotifications = sortedNotifications.slice(0, 5);
                setNotifications(topFiveNotifications);
                console.log("Notifications: ", topFiveNotifications);
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

    return (
        <>
            <div className="tf__heading_area my-4">
                <h5 className='fs-3'>Latest Notifications</h5>
            </div>
            <div ref={marqueeRef} className={`container marquee`}>
                {isLoading && <p className='text-light text-center'>Loading notifications...</p>}
                <div className={`marquee-inner ${isIntersecting ? 'start-scroll' : ''}`}>
                    {notifications && notifications.map(notification => (
                        <div key={notification._id} className="notification">
                            <Navlink href={`/notifications/notificationdetails?id=${notification._id}`}>{notification.NoticeTitle}</Navlink>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default NoticeBoard;
