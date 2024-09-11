import AboutHeading from '@/components/common/parts/aboutHeading/AboutHeading';
import styles from './Information.module.css';
import { hobbyArray, skillArray } from '@/lib/information';

const Information = () => {
  return (
    <section>
      <div className={styles.wrap}>
        <AboutHeading text="Information" />
        <dl className={styles.content}>
          <dt className={styles.dt}>所在地</dt>
          <dd className={styles.dd}>東京都</dd>
          <dt className={styles.dt}>出身地</dt>
          <dd className={styles.dd}>大阪府枚方市</dd>
          <dt className={styles.dt}>開発スキル / 環境</dt>
          <dd className={styles.dd}>
            {skillArray.map((item) => (
              <div className={styles.skill_wrap} key={item.title}>
                <p className={styles.skill_title}>{item.title}</p>
                <ul className={styles.skill_list}>
                  {item.skills.map((text) => (
                    <li className={styles.skill_item} key={text}>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </dd>
          <dt className={styles.dt}>趣味</dt>
          <dd className={styles.dd}>
            <ul className={styles.hobby_list}>
              {hobbyArray.map((item) => (
                <li className={styles.hobby_item} key={item}>
                  {item}
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
