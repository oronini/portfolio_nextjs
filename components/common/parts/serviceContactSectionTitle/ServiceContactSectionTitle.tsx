import styles from './ServiceContactSectionTitle.module.css';
import ScatterText from '../scatterText/ScatterText';
type Props = { title: string };
const ServiceContactSectionTitle = ({ title }: Props) => {
  return <h3 className={styles.title}>
      <ScatterText text={title} />
    </h3>;
};

export default ServiceContactSectionTitle;
