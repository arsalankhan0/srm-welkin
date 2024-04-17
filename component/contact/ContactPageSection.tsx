import React from "react";
import ContactForm from "../form/ContactForm";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_130 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5 className="fs-3 mb-3">Contact Now</h5>
              </div>
              <p>
                Have any query? Fill the form below and get in touch with us.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Call</h3>
                  <a href="callto:1800 890 1866">1800 890 1866</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text">
                  <h3>mail</h3>
                  <a href="mailto:admin@srmwelkin.com">admin@srmwelkin.com</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>Near Dak Bunglow Opposite Sub-District Hospital Sopore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
