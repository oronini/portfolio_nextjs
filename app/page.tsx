import ServiceSection from '@/components/home/service/ServiceSection';
import styles from '../components/home/Home.module.css';
import About from '@/components/home/about/About';
import Production from '@/components/home/production/Production';
import BlogSite from '@/components/home/blogSite/BlogSite';
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
          <h2 className={styles.title}>
            <ScatterText text="Keep Thinking" delayMs={3300} auto />
            <span className={styles.sub_title}>
              <ScatterText text="考え続ける" delayMs={4300} auto />
            </span>
          </h2>
        </HeroVisual>
        <div
          className={`${styles.main_visual_shadow} animation_mvShadow`}
        ></div>
      </div>
      <ScrollIndicator />
      {/* ファーストビューに入っている要素も、最初のスクロールまで待ってから動かす */}
      <main data-wait-scroll>
        <ServiceSection />
        <SkillMarquee />
        <About />
        <Production />
        <BlogSite />
        <Contact />
      </main>
    </>
  );
}
