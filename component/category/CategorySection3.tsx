"use client";
import React from "react";
import CategorySlider from "../slider/AwardImages";
import { AchievementImgType, CategoryType } from "@/types";
interface Props {
  AchievementImages: AchievementImgType[];
}
const CategorySection3 = ({AchievementImages} : Props) => {
  return (
    // <div className="tf__popular_services_3">
      <div className="container mt_65">
            <div className="tf__heading_area mb-5">
              <h5 className="fs-3">Top Awards</h5>
            </div>
        <CategorySlider AchievementImages={AchievementImages}/>
      </div>
    // </div>
  );
};

export default CategorySection3;
