import { skillArray } from '@/lib/information';
import styles from './SkillMarquee.module.css';

const skills = skillArray.flatMap((group) => group.skills);

const SkillMarquee = () => {
  return (
    <section className={styles.marquee} aria-label="スキル" data-reveal>
      <div className={styles.track}>
        <ul className={styles.list}>
          {skills.map((skill) => (
            <li key={skill} className={styles.item}>
              {skill}
            </li>
          ))}
        </ul>
        {/* 切れ目なく流すための複製(読み上げ対象外) */}
        <ul className={styles.list} aria-hidden="true">
          {skills.map((skill) => (
            <li key={skill} className={styles.item}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillMarquee;
