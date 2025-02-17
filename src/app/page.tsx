import Header from '@/components/HomePageComponents/Header';
import JsonLD from '@/components/JsonLD/homePageLD';
import BelowHeaderComponent from '@/components/HomePageComponents/BelowHeader';
import AboutMeSection from '@/components/HomePageComponents/AboutMeSection';
import Container from '@/components/Container';
import ExperienceSection from '@/components/HomePageComponents/ExperienceSection';
import SkillsSection from '@/components/HomePageComponents/SkillsSection';
import FeaturedBlogs from '@/components/HomePageComponents/FeaturedBlogs';
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
        <div style={{ height: '1000px' }}></div>
      </Container>
    </>
  );
}
