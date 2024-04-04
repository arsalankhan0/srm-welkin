import Layout from "@/component/layout/Layout";
import React from "react";
import type { Metadata } from "next";
import AllTeamMemberSection from "@/component/team/AllTeamMemberSection";
import CategorySection3 from '@/component/category/CategorySection3';
import apiConfig from '@/api.config.json';

export const metadata: Metadata = {
  title: "SRM Welkin Achievements Page",
  description: "Higher Secondary School Sopore",
};

const API_HOST = apiConfig.API_HOST;

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
  const teamData= [
    {
      _id: '1',
      imgSrc: { alt: 'Team Member 1', image: 'images/team_1.jpg' },
      name: 'John Doe',
    },
    {
      _id: '2',
      imgSrc: { alt: 'Team Member 2', image: 'images/team_2.jpg' },
      name: 'Jane Smith',
    },
    {
      _id: '3',
      imgSrc: { alt: 'Team Member 1', image: 'images/team_3.jpg' },
      name: 'John Doe',
    },
    {
      _id: '4',
      imgSrc: { alt: 'Team Member 2', image: 'images/team_4.jpg' },
      name: 'Jane Smith',
    },
    {
      _id: '5',
      imgSrc: { alt: 'Team Member 1', image: 'images/team_5.jpg' },
      name: 'John Doe',
    },
    {
      _id: '6',
      imgSrc: { alt: 'Team Member 2', image: 'images/team_6.jpg' },
      name: 'Jane Smith',
    },
    {
      _id: '6',
      imgSrc: { alt: 'Team Member 2', image: 'images/team_7.jpg' },
      name: 'Jane Smith',
    },
  ];
  return (
    <Layout>
      <section className="tf__about_us_page mt_130">
        <AllTeamMemberSection title="Achievements" teamData={teamData} />
        <CategorySection3 AchievementImages={AchievementImageData}/>
      </section>
    </Layout>
  );
};

export default page;
