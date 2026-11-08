import styles from './Titles.module.css';
import TitleUnderline from './TitleUnderline';
import ScatterText from '../scatterText/ScatterText';
type Props = {
  title: string;
  subTitle: string;
};
const SectionTitle = ({ title, subTitle }: Props) => {
  return (
    <h3 className={styles.title} data-reveal>
      <ScatterText text={title} />
      <span className={styles.sub_title}>
        <ScatterText text={subTitle} />
      </span>
      <TitleUnderline />
    </h3>
  );
};

export default SectionTitle;
