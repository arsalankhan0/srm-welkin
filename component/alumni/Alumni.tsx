import React from "react";
import AlumniSlider from "../slider/AlumniSlider";
import { AlumniType } from "@/types";

type Props = {
  style: string;
  alumniData: AlumniType[];
}

const CourseSection = ({ style, alumniData } : Props) => {
  return (
    <section className={`${style}`}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_45">
              <h5 className="fs-3">Alumni</h5>
            </div>
          </div>
        </div>
        <AlumniSlider alumniData={alumniData}/>
      </div>
    </section>
  );
};

export default CourseSection;
