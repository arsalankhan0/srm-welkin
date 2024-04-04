import FooterSection from "@/component/footer/FooterSection";
import JoinUsSection from "@/component/joinus/JoinUsSection";
import RecruitmentInsights from "@/component/joinus/RecruitmentInsights";
import NavbarSection from "@/component/navbar/NavbarSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SRM Welkin Join us Page",
    description: "Higher Secondary School Sopore",
};
export default async function page() {


    return (
        <>
        <NavbarSection style="" logo="images/welkinLogo.png" />
        <JoinUsSection />
        <RecruitmentInsights />
        <FooterSection />
        <ScrollToTopButton style="" />
        </>
    );
}
