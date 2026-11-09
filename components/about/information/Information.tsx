import AboutHeading from '@/components/common/parts/aboutHeading/AboutHeading';
import styles from './Information.module.css';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import { hobbyArray, skillArray } from '@/lib/information';
import SkillIcon from './SkillIcon';
import { scatterStyle } from '@/lib/scatter';

const Information = () => {
  let tagIndex = 0;

  return (
    <section data-reveal>
      <div className={styles.wrap}>
        <AboutHeading text="Information" />
        <dl className={styles.content}>
          <dt className={styles.dt}>
            <ScatterText text="所在地" />
          </dt>
          <dd className={styles.dd}>
            <ScatterText text="東京都" />
          </dd>
          <dt className={styles.dt}>
            <ScatterText text="出身地" />
          </dt>
          <dd className={styles.dd}>
            <ScatterText text="大阪府枚方市" />
          </dd>
          <dt className={styles.dt}>開発スキル / 環境</dt>
          <dd className={styles.dd} data-scatter>
            {skillArray.map((item) => (
              <div className={styles.skill_wrap} key={item.title}>
                <p className={styles.skill_title}>{item.title}</p>
                <ul className={styles.skill_list}>
                  {item.skills.map((text) => (
                    <li
                      className={styles.skill_item}
                      key={text}
                      style={scatterStyle(tagIndex++)}
                    >
                      <SkillIcon skill={text} />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </dd>
          <dt className={styles.dt}>
            <ScatterText text="趣味" />
          </dt>
          <dd className={styles.dd}>
            <ul className={styles.hobby_list}>
              {hobbyArray.map((item) => (
                <li className={styles.hobby_item} key={item}>
                  <ScatterText text={item} />
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default Information;
