import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const MissionVisionOffer = () => {
    return (
        <div className="container mt-5">
            <div className="tf__heading_area mb_15">
                <h5 className="fs-3">OUR OFFERING</h5>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card h-100 shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title">OUR MISSION</h4>
                            <p className="card-text">
                                At Welkin, we strive to impart the best in class learning
                                experience to our students. We believe in a holistic approach
                                towards education so that the students are equipped with all the
                                skills requisite for a successful life ahead.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="card h-100 shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title">OUR VISION</h4>
                            <p className="card-text">
                                Our vision is to set a benchmark in academics and to furnish
                                such human assets which prove their mettle in every sphere of
                                life. We believe in fostering an inclusive community which
                                upholds the highest standards of human values, preparing
                                students to thrive in a diverse world. Join us in shaping a
                                future of excellence and compassion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title">WHAT WE OFFER</h4>
                            <p className="card-text">
                                At Welkin, we pride ourselves on providing the best in class
                                learning experience to our young learners where everyone is
                                encouraged to reach their full potential. Our dedicated team of
                                highly qualified educators is committed to impart holistic
                                education which encompasses both academic excellence and
                                personal growth.
                            </p>
                            <div className="d-flex flex-column">
                                <p className="my-2 fs-5">We Offer:</p>
                                <div className="mb-2">
                                    <img src="/images/about_2_icon_1.jpg" alt="img" className="me-2 about-list-img"/>
                                    Professional growth opportunities.
                                </div>
                                <div className="mb-2">
                                    <img src="/images/about_2_icon_2.jpg" alt="img" className="me-2 about-list-img"/>
                                    Inclusive and supportive environment.
                                </div>
                                <div className="mb-2">
                                <img src="/images/about_2_icon_3.jpg" alt="img" className="me-2 about-list-img"/>
                                    State-of-the-art facilities and resources to enhance the
                                    learning experience.
                                </div>
                                <div className="mb-2">
                                    <img src="/images/about_2_icon_4.jpg" alt="img" className="me-2 about-list-img"/>
                                    Community engagement.
                                </div>
                                <div className="mb-2">
                                    <img src="/images/about_2_icon_1.jpg" alt="img" className="me-2 about-list-img"/>
                                    Student-centered approach.
                                </div>
                                <div className="mb-2">
                                    <img src="/images/about_2_icon_3.jpg" alt="img" className="me-2 about-list-img"/>
                                    Dedicated mentorship.
                                </div>
                                <div className="mb-2">
                                    <img src="/images/about_2_icon_2.jpg" alt="img" className="me-2 about-list-img"/>
                                    Competitive compensation and benefits.
                                </div>
                                <div className="mb-2">
                                    <img src="/images/about_2_icon_4.jpg" alt="img" className="me-2 about-list-img"/>
                                    Continuous support and feedback.
                                </div>
                            </div>
                            <p className="mt-3">
                                We sow the seeds of excellence to harvest impeccable results as
                                we believe that nurturing a culture of dedication, innovation,
                                and continuous growth leads to the success and fulfillment of
                                every individual within our community. If you share our passion
                                for the pursuit of excellence, come join us on a transformative
                                journey to nurture the aspirations of countless young minds,
                                giving them the wings to fly and the courage to soar high.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVisionOffer;
