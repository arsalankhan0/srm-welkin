"use client"
import React from "react";
import { FaEye, FaBullseye, FaGift } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MissionVisionOffer = () => {

    return (
      <>
        <div className="tf__heading_area mt-5">
          <h5 className="fs-3">OUR OFFERING</h5>
        </div>
        <div
          className="container-fluid mt-5 py-5"
          style={{
            backgroundImage: "url('/images/mv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <div className="mission-content">
                  <h4><FaBullseye className="text-primary my-3" /> OUR MISSION</h4>
                  <p>
                    At Welkin, we strive to impart the best in class learning
                    experience to our students. We believe in a holistic approach
                    towards education so that the students are equipped with all
                    the skills requisite for a successful life ahead.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-4 ">
                <img
                  src="/images/mission.png"
                  alt="Mission"
                  className="mission-image"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12 mb-4">
                <div className="vision-content">
                  <h4><FaEye className="text-primary my-3" /> OUR VISION</h4>
                  <p>
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
        </div>

        <div className="container-fluid pb_100"
          style={{
            backgroundImage: "url('/images/about_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4><FaGift className="text-primary my-3"/> WHAT WE OFFER</h4>
                <p className="text">
                  At Welkin, we pride ourselves on providing the best in class
                  learning experience to our young learners where everyone is
                  encouraged to reach their full potential. Our dedicated team
                  of highly qualified educators is committed to impart holistic
                  education which encompasses both academic excellence and
                  personal growth.
                </p>
                <div className="container">
                <p className="mt-3 fs-5">We Offer:</p>
                  <Slider
                    className="card-slider"
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={5}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    responsive={[
                      {
                        breakpoint: 992,
                        settings: {
                          slidesToShow: 2,
                        },
                      },
                      {
                        breakpoint: 576,
                        settings: {
                          slidesToShow: 1,
                        },
                      },
                    ]}
                  >
                    <div className="offer-card d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src="/images/professionalGrowth.png"
                          alt="img"
                          className="mb-3"
                        />
                        <p className="text-center" style={{ color: "#333" }}>
                          Professional growth opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="offer-card d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src="/images/supportive.png"
                          alt="img"
                          className="mb-3"
                        />
                        <p className="text-center" style={{ color: "#333" }}>
                          Inclusive and supportive environment.
                        </p>
                      </div>
                    </div>
                    <div className="offer-card d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src="/images/learningExperience.png"
                          alt="img"
                          className="mb-3"
                        />
                        <p className="text-center" style={{ color: "#333" }}>
                          State-of-the-art facilities and resources to enhance the learning experience.
                        </p>
                      </div>
                    </div>
                    <div className="offer-card d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src="/images/communityEngagement.png"
                          alt="img"
                          className="mb-3"
                        />
                        <p className="text-center" style={{ color: "#333" }}>
                          Community engagement.
                        </p>
                      </div>
                    </div>
                    <div className="offer-card d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src="/images/approach.png"
                          alt="img"
                          className="mb-3"
                        />
                        <p className="text-center" style={{ color: "#333" }}>
                          Student-centered approach.
                        </p>
                      </div>
                    </div>
                    <div className="offer-card d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src="/images/mentorship.png"
                          alt="img"
                          className="mb-3"
                        />
                        <p className="text-center" style={{ color: "#333" }}>
                          Dedicated mentorship.
                        </p>
                      </div>
                    </div>
                    <div className="offer-card d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src="/images/benefits.png"
                          alt="img"
                          className="mb-3"
                        />
                        <p className="text-center" style={{ color: "#333" }}>
                          Competitive compensation and benefits.
                        </p>
                      </div>
                    </div>
                    <div className="offer-card d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src="/images/support.png"
                          alt="img"
                          className="mb-3"
                        />
                        <p className="text-center" style={{ color: "#333" }}>
                          Continuous support and feedback.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
                <p className="mt-3">
                  We sow the seeds of excellence to harvest impeccable results as we believe that nurturing a culture of dedication, innovation, and continuous growth leads to the success and fulfillment of every individual within our community. If you share our passion for the pursuit of excellence, come join us on a transformative journey to nurture the aspirations of countless young minds, giving them the wings to fly and the courage to soar high.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default MissionVisionOffer;
  
