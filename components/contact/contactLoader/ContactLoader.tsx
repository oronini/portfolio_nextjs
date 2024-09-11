import styles from './ContactLoader.module.css';

const ContactLoader = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.loader}>
        <div className={styles.load_inner}></div>
        <div className={styles.load_inner}></div>
        <div className={styles.load_inner}></div>
        <span className={styles.text}>WAIT...</span>
      </div>
    </div>
  );
};

export default ContactLoader;
