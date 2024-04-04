import React from 'react';
import { FaRocket, FaBook, FaPhoneAlt } from 'react-icons/fa';
import './AboutSection3.css';

const WelkinImage = () => {
    return (
        <section className="img-container mt-5">
            <div className="img-overlay d-flex align-items-center pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 m-auto text-center wow fadeInUp">
                            <h2 className="text-light mb-5 fs-2 fw-bold">Let's Build The Future Now</h2>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-center icon-text">
                                        <FaRocket className="text-primary me-3 fs-1" />
                                        <span className="text-light fs-4">Admission Enquiry</span>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-center icon-text">
                                        <FaBook className="text-primary me-3 fs-1" />
                                        <span className="text-light fs-4">Explore Courses</span>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-center icon-text">
                                        <FaPhoneAlt className="text-primary me-3 fs-1" />
                                        <span className="text-light fs-4">Contact us</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelkinImage;
