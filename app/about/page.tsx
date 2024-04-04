import AboutSection3 from '@/component/about/AboutSection3'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
import AboutMainBanner from '@/component/banner/AboutMainBanner'
import CounterArea from '@/component/counter/CounterArea'
import MissionVisionOffer from '@/component/about/VisionMissionOffer'
import WelkinImage from '@/component/about/WelkinImage'

export const metadata: Metadata = {
  title: "SRM Welkin About Page",
  description: "Higher Secondary School Sopore",
}
const page = async() => {

  const counters = [
    {
      start: 1,
      end: 100,
      duration: 5,
      label: "Kanal of Beautiful Campus"
    },
    {
      start: 1,
      end: 10,
      duration: 5,
      label: "Years of Excellence"
    },
    {
      start: 1,
      end: 200,
      duration: 5,
      label: "Qualified & Trained Teachers"
    },
    {
      start: 1,
      end: 6000,
      duration: 5,
      label: "Students Enrolled"
    }

  ];
  return (
    <Layout>
        <AboutMainBanner />
        <section className="tf__about_us_page mt-5">
            <AboutSection3 style=''/>
            <WelkinImage />
            <MissionVisionOffer/>
            <CounterArea marginTop='mt-5' counters={counters} />
        </section>
    </Layout>
  )
}

export default page