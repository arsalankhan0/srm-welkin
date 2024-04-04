import React from "react";
import { FaSchool, FaUsers, FaCertificate } from "react-icons/fa";

type Props = {
  style: string;
};

const AboutSection3 = ({ style }: Props) => {
  return (
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="tf__heading_area mb_15">
          <h5 className="fs-3">About Us</h5>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 wow fadeInRight">
            <div className="">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <FaSchool className="me-3 text-primary" size={40} />
                        <h3>Why SRM Welkin?</h3>
                      </div>
                      <p>
                        Welkin is about 55 km away from the capital city
                        Srinagar, commonly known as North Kashmir, Apple town
                        Sopore situated at the banks of the River Jhelum. The
                        institution primarily was established to spread the
                        power of knowledge, information, and enlightenment to
                        the inhabitants of the town. As of now, the institution
                        covers 100 kanals of land, with seven giant spacious
                        elegant, and splendid structures. Although the town
                        attained importance acquiring grand centers for basic
                        amenities like sub-district Hospital, Dak Bungalow, two
                        colleges, however, with regard to the academic standard,
                        the infrastructure equipped with the latest technology
                        made SRM Welkin the benchmark. This goes without
                        exaggeration that the town procured its lost glory of
                        knowledge, granularity, and intellectuality by the
                        establishment of this institution. The library of this
                        institution is properly digitalized and serves as the
                        treasure of knowledge, quenching the thirst of thousand
                        odd knowledge thirsty aspirants. The library windows are
                        full of thousands of books on varied subjects like
                        English, Science, Maths, Urdu, philosophy, psychology,
                        Technology, Theology, Economics, History, Politics,
                        Sociology, so on and so forth. Besides this the
                        institution has a multipurpose hall, which serves as a
                        venue for multifarious activities. For kindergarten the
                        institution has a separate activity room with all the
                        attractions serving the educational purpose. The piece
                        of land under the giant seven structures covers 100
                        kanals with three vast playgrounds, one basketball
                        court, one play zone and an elegant botanical garden.
                        Cafeteria for the refreshment of the staff and students
                        has been established in Ahad block.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card shadow h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <FaUsers className="me-3 text-success" size={40} />
                        <h3>Our Team</h3>
                      </div>
                      <p>
                        The institution has a huge staff comprising of teaching
                        and non-teaching faculties. The whole team is
                        administered and guided by the able and competent
                        administration of the institution. Down the line
                        Teaching and non-teaching faculties work under different
                        nomenclatures like Chairman, vice-chairperson,
                        principal, Academic Head, HODs, and supervisors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card shadow h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <FaCertificate
                          className="me-3 text-warning"
                          size={40}
                        />
                        <h3>Accreditation</h3>
                      </div>
                      <p>
                        Maintaining the educational setup and standards, SRM
                        Welkin Higher secondary school got its accreditation
                        right at its onset by JK BOSE. It has the approvals from
                        Fire and Emergency Department, Chemicals Department, and
                        R&B for its functioning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
