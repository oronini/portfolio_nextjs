import styles from './Titles.module.css';
import TitleUnderline from './TitleUnderline';
type Props = {
  title: string;
  subTitle: string;
};
const SectionTitle = ({ title, subTitle }: Props) => {
  return (
    <h3 className={styles.title} data-reveal>
      {title}
      <span className={styles.sub_title}>{subTitle}</span>
      <TitleUnderline />
    </h3>
  );
};

export default SectionTitle;
