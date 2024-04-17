
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
import WorkSection from '@/component/work/WorkSection';
import VissionMissionOffer from '@/component/about/VisionMissionOffer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SRM Welkin Home Page",
  description: "Higher Secondary School Sopore",
}
export default async function Home() {

  const staff= [
    {
      _id: '1',
      imgSrc: { alt: 'Team Member 1', image: 'images/team_1.jpg' },
      name: 'John Doe',
      description: 'Software Engineer',
    },
    {
      _id: '2',
      imgSrc: { alt: 'Team Member 2', image: 'images/team_2.jpg' },
      name: 'Jane Smith',
      description: 'Graphic Designer',
    },
    {
      _id: '3',
      imgSrc: { alt: 'Team Member 1', image: 'images/team_3.jpg' },
      name: 'John Doe',
      description: 'Software Engineer',
    },
    {
      _id: '4',
      imgSrc: { alt: 'Team Member 2', image: 'images/team_4.jpg' },
      name: 'Jane Smith',
      description: 'Graphic Designer',
    },
    {
      _id: '5',
      imgSrc: { alt: 'Team Member 1', image: 'images/team_5.jpg' },
      name: 'John Doe',
      description: 'Software Engineer',
    },
    {
      _id: '6',
      imgSrc: { alt: 'Team Member 2', image: 'images/team_6.jpg' },
      name: 'Jane Smith',
      description: 'Graphic Designer',
    },
    {
      _id: '6',
      imgSrc: { alt: 'Team Member 2', image: 'images/team_7.jpg' },
      name: 'Jane Smith',
      description: 'Graphic Designer',
    },
  ];

  const students= [
    {
      _id: '1',
      imgSrc: { alt: 'Work 1', image: 'images/team_8.jpg' },
      task: 'Task 1',
      color: 'blue',
      class: '(Pre-Primary Wing) NURSERY',
      desc: 'Best Female Student',
    },
    {
      _id: '2',
      imgSrc: { alt: 'Work 2', image: 'images/team_9.jpg' },
      task: 'Task 2',
      color: 'red',
      class: '(Primary Wing) 4TH IRISS',
      desc: 'Best Female Student',
    },
    {
      _id: '3',
      imgSrc: { alt: 'Work 2', image: 'images/team_9.jpg' },
      task: 'Task 2',
      color: 'green',
      class: '(Primary Wing) 4TH LILY',
      desc: 'Best Female Student',
    },
    {
      _id: '4',
      imgSrc: { alt: 'Work 2', image: 'images/team_9.jpg' },
      task: 'Task 2',
      color: 'orange',
      class: '(Pre-Primary Wing) LKG IRIS',
      desc: 'Best Female Student',
    },
    {
      _id: '5',
      imgSrc: { alt: 'Work 2', image: 'images/team_9.jpg' },
      task: 'Task 2',
      color: 'orange',
      class: '(Pre-Primary Wing) LKG IRIS',
      desc: 'Best Female Student',
    },

  ];

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
            teamData={staff} />
      {students && <WorkSection workData={students}/>}
      <FooterSection />
      <ScrollToTopButton style="" />
    </>
  );
}
