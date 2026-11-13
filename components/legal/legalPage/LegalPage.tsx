import PagesTitle from '@/components/common/parts/Titles/PagesTitle';
import { LEGAL_UPDATED_AT } from '@/lib/legal';
import styles from './LegalPage.module.css';

type Props = {
  data: LegalPageData;
};

const LegalPage = ({ data }: Props) => {
  return (
    <div className={styles.wrap}>
      <main>
        <PagesTitle title={data.title} subTitle={data.subTitle} />
        <div className={styles.body}>
          <p className={styles.lead}>{data.lead}</p>
          {data.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h3 className={styles.heading}>{section.heading}</h3>
              {section.paragraphs?.map((text) => (
                <p key={text} className={styles.text}>
                  {text}
                </p>
              ))}
              {section.items && (
                <ul className={styles.list}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <p className={styles.updated}>最終更新日:{LEGAL_UPDATED_AT}</p>
        </div>
      </main>
    </div>
  );
};

export default LegalPage;
