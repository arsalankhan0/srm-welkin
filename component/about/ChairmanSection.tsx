import React from "react";

const ChairmanSection = () => {

  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="images/welkinChairman.jpeg"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>WELCOME MESSAGE From the Chairman SRM Welkin</h4>
                  <p>
                    At Welkin everyone is encouraged to get involved to his maximum capacity and to do his best. The experiences that every student will have during his lifetime will equip him for life in the present demanding and fast-changing world  a world that plays a key role in shaping their future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
