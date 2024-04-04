import React from 'react';
import styles from './NoticeBoard.module.css';

const notifications = [
    {
        id: 1,
        title: "Important Announcement",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec felis in dolor maximus ullamcorper. Duis tincidunt eros nec mi consequat, vel consequat leo tempor.",
        date: "March 19, 2024"
    },
    {
        id: 2,
        title: "Upcoming Event",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eget nisi at lectus condimentum suscipit.",
        date: "March 21, 2024"
    }

];

const NoticeBoard = () => {
    return (
        <>
            <div className="tf__heading_area mb_15 mt-5">
                <h5 className='fs-3'>Notifications</h5>
            </div>
            <div className={styles.noticeBoard}>
                <ul className={styles.noticeList}>
                    {notifications.map(notification => (
                        <li key={notification.id} className={styles.notice}>
                            <div className={styles.noticeContent}>
                                <h3 className={styles.noticeTitle}>{notification.title}</h3>
                                <p className={styles.noticeText}>{notification.content}</p>
                                <p className={styles.noticeDate}>Date: {notification.date}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default NoticeBoard;
