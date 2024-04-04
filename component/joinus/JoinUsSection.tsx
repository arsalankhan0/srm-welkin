"use client";
import React from "react";
import JoinUsForm from "./JoinUsForm";

const RegisterSection = () => {
    return (
        <section className="tf__registration mt_130 xs_mt_95">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-xxl-10 col-xl-10 col-md-9 col-lg-7 m-auto">
                        <div className="tf__login_area">
                            <h2>Join Us</h2>
                            <JoinUsForm />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterSection;
