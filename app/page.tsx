import ServiceSection from '@/components/home/service/ServiceSection';
import styles from '../components/home/Home.module.css';
import About from '@/components/home/about/About';
import Production from '@/components/home/production/Production';
// import BlogSite from '@/components/home/blogSite/BlogSite';
import Contact from '@/components/home/contact/Contact';
import '../components/home/MvAnimation.css';

export default function Home() {
  return (
    <>
      <div className={styles.main_visual_wrap}>
        <div className={`${styles.main_visual} animation_mv`}>
          <div className={`${styles.line} animation_line1`}></div>
          <div className={`${styles.line} animation_line2`}></div>
          <div className={`${styles.line} animation_line3`}></div>
          <div className={`${styles.line} animation_line4`}></div>
          <h2 className={`${styles.title} animation_text1`}>
            Keep&nbsp;Thinking
            <span className={`${styles.sub_title} animation_text2`}>
              考え続ける
            </span>
          </h2>
        </div>
        <div
          className={`${styles.main_visual_shadow} animation_mvShadow`}
        ></div>
      </div>
      <main>
        <ServiceSection />
        <About />
        <Production />
        {/* <BlogSite /> */}
        <Contact />
      </main>
    </>
  );
}
