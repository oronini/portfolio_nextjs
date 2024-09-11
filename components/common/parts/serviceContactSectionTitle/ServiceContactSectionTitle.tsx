import styles from './ServiceContactSectionTitle.module.css';
type Props = { title: string };
const ServiceContactSectionTitle = ({ title }: Props) => {
  return <h3 className={styles.title}>{title}</h3>;
};

export default ServiceContactSectionTitle;
