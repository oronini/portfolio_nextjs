import AboutHeading from '@/components/common/parts/aboutHeading/AboutHeading';
import { experienceArray } from '@/lib/experience';
import SkillIcon from '../information/SkillIcon';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section data-reveal>
      <div className={styles.wrap}>
        <AboutHeading text="Experience" />
        <ol className={styles.list}>
          {experienceArray.map((item) => (
            <li className={styles.item} key={item.period + item.title}>
              <p className={styles.period}>{item.period}</p>
              <div className={styles.body}>
                <h4 className={styles.title}>{item.title}</h4>
                {item.text && <p className={styles.text}>{item.text}</p>}
                {item.points && (
                  <ul className={styles.points}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.skills && (
                  <ul className={styles.tags}>
                    {item.skills.map((skill) => (
                      <li className={styles.tag} key={skill}>
                        <SkillIcon skill={skill} className={styles.icon} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
