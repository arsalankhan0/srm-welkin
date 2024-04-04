"use client";
import React from "react";
import Slider from "react-slick";
import { AchievementImgType } from "@/types";
interface Props {
  AchievementImages: AchievementImgType[];
}
const AwardImages = ({AchievementImages} : Props) => {
  return (
    <Slider
      className="row popular_service_slider wow fadeInUp"
      slidesToShow={4} // Set the number of slides to show
      infinite={true}
      dots={true}
      autoplay={true}
      arrows={false}
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
      {AchievementImages.map((item) => (
        <div className="col-xl-3" key={item._id}>
          <div className={`tf__popular_service_single`}>
            <img src={item._img} alt="img" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default AwardImages;
