import styles from './AboutHeading.module.css';

type aboutHeadingProps = {
  text: string;
};
const AboutHeading = ({ text }: aboutHeadingProps) => {
  return <h3 className={styles.title}>{text}</h3>;
};

export default AboutHeading;
