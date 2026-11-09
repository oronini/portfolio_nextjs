import AboutHeading from '@/components/common/parts/aboutHeading/AboutHeading';
import styles from './Information.module.css';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import { hobbyArray, skillArray } from '@/lib/information';
import SkillIcon from './SkillIcon';

// タグ1つを1つのまとまりとして、ばらばらの位置から集める。
// 位置はサーバー側で決めるため、毎回同じになる擬似乱数を使う
const random = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const scatterStyle = (i: number) => {
  const angle = random(i * 3 + 1) * Math.PI * 2;
  const distance = 140 + random(i * 3 + 2) * 300;
  return {
    '--x': `${Math.round(Math.cos(angle) * distance)}px`,
    '--y': `${Math.round(Math.sin(angle) * distance)}px`,
    '--r': `${Math.round((random(i * 3 + 3) - 0.5) * 120)}deg`,
    '--d': `${Math.round(random(i * 7 + 5) * 500)}ms`,
  } as React.CSSProperties;
};

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
