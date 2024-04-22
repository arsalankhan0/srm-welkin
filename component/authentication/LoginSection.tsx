"use client";
import React from "react";
import LoginForm from "../form/LoginForm";

const LoginSection = () => {

  return (
    <section className="tf__login mt_130 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xxl-5 col-xl-6 col-md-9 col-lg-7 m-auto">
            <div className="tf__login_area">
              <h2>SRM Welkin!</h2>
              <p>sign in to continue</p>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
