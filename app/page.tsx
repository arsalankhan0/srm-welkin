
import ChairmanSection from '@/component/about/ChairmanSection';
import BannerSection from '@/component/banner/BannerSection';
import NotificationSection from '@/component/notification/NotificationSection';
import AllTeamMemberSection from '@/component/team/AllTeamMemberSection';
import CounterArea from '@/component/counter/CounterArea';
import FooterSection from '@/component/footer/FooterSection';
import VideoModal from '@/component/modal/VideoModal';
import NavbarSection from '@/component/navbar/NavbarSection';
import ScrollToTopButton from '@/component/utils/ScrollToTopButton';
import VideoSection from '@/component/video/VideoSection';
import VissionMissionOffer from '@/component/about/VisionMissionOffer';
import type { Metadata } from 'next'
import StudentLeaderboard from '@/component/studentleaderboard/StudentLeaderboard';

export const metadata: Metadata = {
  title: "SRM Welkin Home Page",
  description: "Higher Secondary School Sopore",
}
export default async function Home() {

  const counters = [
    {
      start: 1,
      end: 200,
      duration: 5,
      label: "Well Qualified & experienced Teachers"
    },
    {
      start: 1,
      end: 6000,
      duration: 5,
      label: "Student Enrolled"
    },
    {
      start: 1,
      end: 99.9,
      duration: 5,
      decimals: 1,
      label: "Best results in Academics and other Curricular Activities"
    }
  ];
  return (
    <>
      <NavbarSection style="" logo="images/welkinLogo.png" />
      <BannerSection />
      <VissionMissionOffer />
      <NotificationSection />
      <ChairmanSection />
      <CounterArea marginTop='' counters={counters} />
      <VideoSection />
      <VideoModal />
      <AllTeamMemberSection 
            title='Staff Leader board'
            />
      <StudentLeaderboard />
      <FooterSection />
      <ScrollToTopButton style="" />
    </>
  );
}
