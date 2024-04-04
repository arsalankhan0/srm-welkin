import React from "react";
import { FaUsers, FaComments, FaLightbulb } from "react-icons/fa";

const InsightsOfRecruitment = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4 col-xxl-10 col-xl-10 col-md-9 col-lg-7 m-auto">
        <h2 className="mb-4">Thank you for considering joining our community!</h2>
        <p className="mb-4">
          We are excited to welcome individuals who share our passion and vision. By becoming a member, you will have the opportunity to engage with like-minded individuals, contribute to meaningful discussions, and be a part of initiatives that drive positive change.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center">
              <FaUsers className="me-3 text-primary" size={40} />
              <div>
                <h5 className="mb-0">Engage</h5>
                <p>Engage with like-minded individuals.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center">
              <FaComments className="me-3 text-success" size={40} />
              <div>
                <h5 className="mb-0">Contribute</h5>
                <p>Contribute to meaningful discussions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center">
              <FaLightbulb className="me-3 text-warning" size={40} />
              <div>
                <h5 className="mb-0">Initiate</h5>
                <p>Be a part of initiatives for positive change.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsOfRecruitment;
