"use client";
import { StaffType } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import apiConfig from '@/api.config.json';
interface Props {
  title: string;
}
const AllTeamMemberSection = ({ title } : Props) => {
  const API_HOST = apiConfig.API_HOST;
  const teamPerPage = 6;
  const [teamData, setTeamData] = useState<StaffType[]>([]);
  const [currentTeamPage, setCurrentTeamPage] = useState(1);

  useEffect(() => {
    const fetchTeamData = async () => {
      try 
      {
        const response = await axios.get(`${API_HOST}/getAllStaffMembers`);
        setTeamData(response.data);
      } 
      catch (error) 
      {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamData();
  }, []);


  const startTeamIndex = (currentTeamPage - 1) * teamPerPage;
  const endTeamIndex = startTeamIndex + teamPerPage;
  const currentTeamItems = teamData.slice(startTeamIndex, endTeamIndex);

  const totalTeamPages = Math.ceil(teamData.length / teamPerPage);

  const handleTeamPageChange = (newPage : number) => {
    setCurrentTeamPage(newPage);
  };
  return (
    <section className="tf__team_page mt-5 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5 className="fs-3">{title}</h5>
            </div>
          </div>
        </div>
        <div className="row">
          {currentTeamItems.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item._id}>
              <div className="tf__single_team">
                <div className="tf__single_team_img">
                  <img
                    src={item.staffImage}
                    alt="img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__single_team_text">
                    <span className="title">{item.staffName}</span>
                  <p>{item.staffDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tf__pagination mt_50">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentTeamPage === 1 ? "disabled" : ""
                      }`}
                      aria-label="Previous"
                      onClick={() => handleTeamPageChange(currentTeamPage - 1)}
                    >
                      <i className="far fa-angle-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalTeamPages }, (_, index) => (
                    <li className="page-item" key={index}>
                      <a
                        className={`page-link ${
                          currentTeamPage === index + 1 ? "active" : ""
                        }`}
                        onClick={() => handleTeamPageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentTeamPage === totalTeamPages ? "disabled" : ""
                      }`}
                      aria-label="Next"
                      onClick={() => handleTeamPageChange(currentTeamPage + 1)}
                    >
                      <i className="far fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTeamMemberSection;
