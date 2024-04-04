"use client";
import { AlumniType } from "@/types";
import React from "react";
import Slider from "react-slick";
interface Props {
  alumniData: AlumniType[];
}
const CourseSlider = ({alumniData} : Props) => {
  return (
    <Slider
      className="row event_slider"
      slidesToShow={3} // Set the number of slides to show
      infinite={true}
      dots={true}
      arrows={false}
      autoplay={true}
      slidesToScroll={1} // Set to 1 to scroll one slide at a time
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
            slidesToShow: 2,
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
      {alumniData.map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item._id}>
          <div className="tf__single_courses">
            <div className="tf__single_courses_img">
              <img
                src={item.imgSrc.image}
                alt="courses"
                className="img-fluid w-100"
              />
            </div>
            <ul className="tf__single_course_header">
              <li>
                <i className="fas fa-user"></i> {item.name}
              </li>
            </ul>
            <div className="tf__single_courses_text">
                {item.profession}
              <p className="batch">{item.batch}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CourseSlider;
