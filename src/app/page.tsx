import Header from '@/components/HomePageComponents/Header';
import JsonLD from '@/components/JsonLD/homePageLD';
import BelowHeaderComponent from '@/components/HomePageComponents/BelowHeader';
import AboutMeSection from '@/components/HomePageComponents/AboutMeSection';
import Container from '@/components/Container';
import ExperienceSection from '@/components/HomePageComponents/ExperienceSection';
import SkillsSection from '@/components/HomePageComponents/SkillsSection';
import FeaturedBlogs from '@/components/HomePageComponents/FeaturedBlogs';
import FeaturedProjects from '@/components/HomePageComponents/ProjectsSection';
import Timeline from '@/components/HomePageComponents/Timeline';
import Declaration from '@/components/HomePageComponents/Declaration';
import ContactMeSection from '@/components/HomePageComponents/ContactMeSection';
import OuterLinks from '@/components/OuterLinks';

export default function Home() {
  return (
    <>
      <JsonLD />
      <Header />
      <BelowHeaderComponent />
      <Container>
        <AboutMeSection className='section-spacer ' />
        <ExperienceSection className='section-spacer ' />
        <SkillsSection className='section-spacer ' />
        <FeaturedBlogs className='section-spacer ' />
        <FeaturedProjects className='section-spacer ' />
        <Timeline className='section-spacer ' />
        <Declaration className='section-spacer ' />
        <ContactMeSection className='section-spacer ' />
      </Container>
      {/* <OuterLinks /> */}
    </>
  );
}
