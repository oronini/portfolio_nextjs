import styles from './AboutHeading.module.css';
import ScatterText from '../scatterText/ScatterText';

type aboutHeadingProps = {
  text: string;
};
const AboutHeading = ({ text }: aboutHeadingProps) => {
  return (
    <h3 className={styles.title}>
      <ScatterText text={text} />
    </h3>
  );
};

export default AboutHeading;
