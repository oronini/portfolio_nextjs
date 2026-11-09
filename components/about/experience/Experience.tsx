import AboutHeading from '@/components/common/parts/aboutHeading/AboutHeading';
import { experienceArray } from '@/lib/experience';
import SkillIcon from '../information/SkillIcon';
import styles from './Experience.module.css';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import { scatterStyle } from '@/lib/scatter';

const Experience = () => {
  let tagIndex = 0;

  return (
    <section data-reveal>
      <div className={styles.wrap}>
        <AboutHeading text="Experience" />
        <ol className={styles.list}>
          {experienceArray.map((item) => (
            <li className={styles.item} key={item.period + item.title}>
              <p className={styles.period}>
                <ScatterText text={item.period} />
              </p>
              <div className={styles.body}>
                <h4 className={styles.title}>
                  <ScatterText text={item.title} />
                </h4>
                {item.text && (
                  <p className={styles.text}>
                    <ScatterText text={item.text} />
                  </p>
                )}
                {item.points && (
                  <ul className={styles.points}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.skills && (
                  <ul className={styles.tags} data-scatter>
                    {item.skills.map((skill) => (
                      <li
                        className={styles.tag}
                        key={skill}
                        style={scatterStyle(tagIndex++)}
                      >
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
