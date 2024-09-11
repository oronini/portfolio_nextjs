import styles from './Titles.module.css';
type Props = {
  title: string;
  subTitle: string;
};
const SectionTitle = ({ title, subTitle }: Props) => {
  return (
    <h3 className={styles.title}>
      {title}
      <span className={styles.sub_title}>{subTitle}</span>
    </h3>
  );
};

export default SectionTitle;
