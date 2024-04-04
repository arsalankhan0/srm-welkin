import Layout from "@/component/layout/Layout";
import React from "react";
import type { Metadata } from "next";
import Alumni from "@/component/alumni/Alumni";

export const metadata: Metadata = {
    title: "SRM Welkin Alumni page",
    description: "Higher Secondary School Sopore",
};
const page = async () => {

    const alumniData = [
        {
            _id: '1',
            imgSrc: {
                alt: 'img',
                image: 'images/alumni/shariqWani.jpg'
            },
            name: 'SHARIK AHMAD WANI',
            profession: 'MBBS (GMC SRINAGAR)',
            batch: '2018'
        },
        {
            _id: '2',
            imgSrc: {
                alt: 'img',
                image: 'images/alumni/syedMuskan.jpg'
            },
            name: 'SYED MUSKAN SHAFIQ',
            profession: 'B.A HONS. JOURNALISM',
            batch: '2018'
        },
        {
            _id: '3',
            imgSrc: {
                alt: 'img',
                image: 'images/alumni/sumiyaHameed.jpg'
            },
            name: 'SUMIYA HAMID',
            profession: 'STUDENT',
            batch: '2018'
        },
        {
            _id: '4',
            imgSrc: {
                alt: 'img',
                image: 'images/alumni/faisalShalla.jpeg'
            },
            name: 'FAISAL AHAD SHALA',
            profession: 'IMBA',
            batch: '2018'
        },
        {
            _id: '5',
            imgSrc: {
                alt: 'img',
                image: 'images/alumni/ansabAshraf.jpeg'
            },
            name: 'ANSAB ASHRAF',
            profession: 'MBBS',
            batch: '2018'
        },
        {
            _id: '6',
            imgSrc: {
                alt: 'img',
                image: 'images/alumni/najamuSaaqibReegoo.jpeg'
            },
            name: 'DR. NAJAMU SAQIB REGOO',
            profession: 'D.V.M, M.S, PGCERT Small Animal Medicine',
            batch: '2018'
        },
        {
            _id: '7',
            imgSrc: {
                alt: 'img',
                image: 'images/alumni/shahSuhaib.jpg'
            },
            name: 'SUHAIB RASHID SHAH',
            profession: 'MBBS',
            batch: '2018'
        },
        {
            _id: '8',
            imgSrc: {
                alt: 'img',
                image: 'images/alumni/rameezAhmad.jpeg'
            },
            name: 'RAMEEZ YATOO',
            profession: 'BSc Computer Science',
            batch: '2018'
        }
    ]
    return (
        <Layout>
        <section className="tf__about_us_page mt_130">
            <Alumni style="tf__courses_2" alumniData={alumniData}/>
        </section>
        </Layout>
    );
};

export default page;
