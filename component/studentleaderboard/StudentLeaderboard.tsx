"use client";
import React, { useEffect, useState } from "react";
import WorkSlider from "../slider/WorkSlider";
import { StudentType } from "@/types";
import apiConfig from '@/api.config.json';
import axios from "axios";

const WorkSection = () => {
  const API_HOST = apiConfig.API_HOST;
  const [studentData, setStudentData] = useState<StudentType[]>([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try 
      {
        const response = await axios.get(`${API_HOST}/getAllStudents`)
        setStudentData(response.data);
      } 
      catch (error) 
      {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);


  return (
    <section className="tf__work mt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_35 md_margin">
              <h5 className="fs-3">Student Leader Board</h5>
            </div>
          </div>
        </div>
        <WorkSlider studentData={studentData}/>
      </div>
    </section>
  );
};

export default WorkSection;
