'use client'
import { StudentType } from "@/types";
import React from "react";
import Slider from "react-slick";
interface Props {
  studentData: StudentType[]
}
const WorkSlider = ({studentData} : Props) => {

  const colors = ['red', 'blue', 'green', 'orange'];
  const slidesToShow = Math.min(studentData.length, 4);
  return (
    
    <Slider
      className="row work_slider"
      slidesToShow={slidesToShow} // Set the number of slides to show
      infinite={true}
      dots={true}
      autoplay={true}
      arrows={false}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
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
      {studentData.map((item, index) => (
        <div className="col-xl-4 wow fadeInUp" key={item._id}>
          <div className={`tf__work_single ${colors[index % colors.length]}`} >
            <div className="tf__work_single_img">
              <img src={item.studentImage} alt="img" className="img-fluid w-100" />
            </div>
            <div className="tf__work_single_text">
              <h3>{item.studentName}</h3>
              <p>{item.studentClass}</p>
              <p>{item.studentAward}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default WorkSlider;
