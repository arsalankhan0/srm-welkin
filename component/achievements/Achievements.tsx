"use client";
import { AchievementType } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import apiConfig from '@/api.config.json';
interface Props {
  title: string;
}
const Achievements = ({ title } : Props) => {
  const API_HOST = apiConfig.API_HOST;
  const teamPerPage = 6;
  const [achievementData, setAchievementData] = useState<AchievementType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTeamData = async () => {
      try 
      {
        const response = await axios.get(`${API_HOST}/getAllAchievements`);
        setAchievementData(response.data.achievements.reverse());
      } 
      catch (error) 
      {
        console.error("Error fetching Achievements:", error);
      }
    };

    fetchTeamData();
  }, []);


  const startTeamIndex = (currentPage - 1) * teamPerPage;
  const endTeamIndex = startTeamIndex + teamPerPage;
  const currentTeamItems = achievementData.slice(startTeamIndex, endTeamIndex);

  const totalTeamPages = Math.ceil(achievementData.length / teamPerPage);

  const handleTeamPageChange = (newPage : number) => {
    setCurrentPage(newPage);
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
        {currentTeamItems.length > 0 ? (
            currentTeamItems.map((item) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp" key={item._id}>
                <div className="tf__single_team">
                  <div className="tf__single_team_img">
                    <img src={item.image} alt="img" className="img-fluid w-100" />
                  </div>
                  <div className="tf__single_team_text">
                    <span className="title">{item.title}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center fs-5">No achievements available</div>
          )}
        </div>
        <div className="tf__pagination mt_50">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                      aria-label="Previous"
                      onClick={() => handleTeamPageChange(currentPage - 1)}
                    >
                      <i className="far fa-angle-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalTeamPages }, (_, index) => (
                    <li className="page-item" key={index}>
                      <a
                        className={`page-link ${
                          currentPage === index + 1 ? "active" : ""
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
                        currentPage === totalTeamPages ? "disabled" : ""
                      }`}
                      aria-label="Next"
                      onClick={() => handleTeamPageChange(currentPage + 1)}
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

export default Achievements;
