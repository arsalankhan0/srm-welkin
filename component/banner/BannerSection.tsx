"use client";
import Link from "next/link";
import React from "react";

const BannerSection = () => {
  return (
    <section className="tf__banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="tf__banner_text wow fadeInUp">
              <p>
                We strive to provide highest quality education, bridging your
                child's success with well formed infrastructure of knowledge and
                resources.
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn" href="/about">
                    Read More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

// "use client"
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from "next/link";

// const BannerSection = () => {
//   // Settings for the slider
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000
//   };

//   // Content for each slide
//   const slideContent = [
//     // Add content for each slide here
//     {
//       image: "/images/welkinMainBanner2.jpg",
//       text: "We strive to provide highest quality education, bridging your child's success with well formed infrastructure of knowledge and resources."
//     },
//     {
//       image: "/images/welkinMainBanner3.jpg",
//       text: "Slide 2 content..."
//     },
//     {
//       image: "/images/welkinMainBanner.jpg",
//       text: "Slide 3 content..."
//     }
//   ];

//   return (
//     <section className="tf__banner">
//       <Slider {...sliderSettings}>
//         {slideContent.map((slide, index) => (
//           <div key={index} className="banner-slide">
//             <img src={slide.image} alt="img" />
//           </div>
//         ))}
//       </Slider>
//       <div className="tf__banner_text">
//         <p>We strive to provide highest quality education, bridging your child's success with well formed infrastructure of knowledge and resources.</p>
//         <ul className="d-flex flex-wrap align-items-center">
//           <li>
//             <Link className="common_btn" href="/about">
//               Read More
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default BannerSection;
