"use client";
import { AlumniType } from "@/types";
import React, { useState } from "react";
import Slider from "react-slick";
interface Props {
  alumniData: AlumniType[];
}
const CourseSlider = ({alumniData} : Props) => {
  const [expandedMessages, setExpandedMessages] = useState(
    alumniData.map(() => false)
  );

  const handleToggleMessage = (index: number) => {
    // Creating copy of the current state
    const newExpandedMessages = [...expandedMessages];
    // Toggle the state for the clicked card
    newExpandedMessages[index] = !newExpandedMessages[index];
    setExpandedMessages(newExpandedMessages);
  };
  const slidesToShow = Math.min(alumniData.length, 4);
  return (
    <Slider
      className="row event_slider"
      slidesToShow={slidesToShow} // Set the number of slides to show
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
      {alumniData.map((item, index) => (
        <div className="col-xl-4 wow fadeInUp" key={item._id}>
          <div className="tf__single_courses">
            <div className="tf__single_courses_img">
              <img
                src={item.image as string}
                alt="courses"
                className="img-fluid w-100"
              />
            </div>
            <ul className="tf__single_course_header">
              <li>
                <i className="fas fa-user"></i> {item.name}
              </li>
              <li>
                <i className="fas fa-briefcase"></i> {item.designation}
              </li>
              <li>
                <i className="fas fa-calendar"></i> {item.batch}
              </li>
            </ul>
            <div className="tf__single_courses_text">
              {/* <p className="batch">{item.message}</p> */}
              <p className="batch">
                {expandedMessages[index]
                  ? item.message 
                  : item.message?.length > 50
                  ? `${item.message.slice(0, 50)}...`
                  : item.message}{" "}
                {item.message?.length > 50 && (
                  <button className="bg-transparent text-primary" onClick={() => handleToggleMessage(index)}>
                    {expandedMessages[index] ? "Show less" : "Show more"}
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CourseSlider;
