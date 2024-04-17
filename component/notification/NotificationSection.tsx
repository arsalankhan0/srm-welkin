"use client"
import React, { useRef, useEffect, useState } from 'react';
import './NoticeAnim.css';
import Navlink from '../navbar/Navlink';

const notifications = [
    {
        id: 1,
        title: "Important Announcement Regarding Final Exams",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec felis in dolor maximus ullamcorper. Duis tincidunt eros nec mi consequat, vel consequat leo tempor.",
        date: "March 19, 2024"
    },
    {
        id: 2,
        title: "School will reopen shortly",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eget nisi at lectus condimentum suscipit.",
        date: "March 21, 2024"
    },
    {
        id: 3,
        title: "Admission open for 2023-2024",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eget nisi at lectus condimentum suscipit.",
        date: "March 21, 2024"
    },
];

const NoticeBoard = () => {
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

    return (
        <>
            <div className="tf__heading_area my-4">
                <h5 className='fs-3'>Latest Notifications</h5>
            </div>
            <div ref={marqueeRef} className={`container marquee`}>
                <div className={`marquee-inner ${isIntersecting ? 'start-scroll' : ''}`}>
                    {notifications.map(notification => (
                        <div key={notification.id} className="notification">
                            <Navlink href="/notifications">{notification.title}</Navlink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default NoticeBoard;
