import ServiceSection from '@/components/home/service/ServiceSection';
import styles from '../components/home/Home.module.css';
import About from '@/components/home/about/About';
import Production from '@/components/home/production/Production';
// import BlogSite from '@/components/home/blogSite/BlogSite';
import Contact from '@/components/home/contact/Contact';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import HeroVisual from '@/components/home/heroVisual/HeroVisual';
import SkillMarquee from '@/components/home/skillMarquee/SkillMarquee';
import ScrollIndicator from '@/components/home/scrollIndicator/ScrollIndicator';
import '../components/home/MvAnimation.css';

export default function Home() {
  return (
    <>
      <div className={styles.main_visual_wrap}>
        <HeroVisual>
          <div className={`${styles.line} animation_line1`}></div>
          <div className={`${styles.line} animation_line2`}></div>
          <div className={`${styles.line} animation_line3`}></div>
          <div className={`${styles.line} animation_line4`}></div>
          <h2 className={`${styles.title} animation_text1`}>
            <ScatterText text="Keep Thinking" delayMs={2000} />
            <span className={`${styles.sub_title} animation_text2`}>
              <ScatterText text="考え続ける" delayMs={3000} />
            </span>
          </h2>
        </HeroVisual>
        <div
          className={`${styles.main_visual_shadow} animation_mvShadow`}
        ></div>
      </div>
      <ScrollIndicator />
      <main>
        <ServiceSection />
        <SkillMarquee />
        <About />
        <Production />
        {/* <BlogSite /> */}
        <Contact />
      </main>
    </>
  );
}
