import Layout from "@/component/layout/Layout";
import React from "react";
import type { Metadata } from "next";
import CategorySection3 from '@/component/category/CategorySection3';
import Achievements from "@/component/achievements/Achievements";

export const metadata: Metadata = {
  title: "SRM Welkin Achievements Page",
  description: "Higher Secondary School Sopore",
};


const page = async () => {

  const AchievementImageData = [
    {
      _id: '1',
      _img: '/images/Awards/award_1.jpg'
    },
    {
      _id: '2',
      _img: '/images/Awards/award_2.jpg'
    },
    {
      _id: '3',
      _img: '/images/Awards/award_3.jpg'
    },
    {
      _id: '4',
      _img: '/images/Awards/award_4.jpg'
    },
    {
      _id: '5',
      _img: '/images/Awards/award_5.jpg'
    },
  ]
  return (
    <Layout>
      <section className="tf__about_us_page mt_130">
        <Achievements title="Achievements"/>
        <CategorySection3 AchievementImages={AchievementImageData}/>
      </section>
    </Layout>
  );
};

export default page;
