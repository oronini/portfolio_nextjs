import styles from './ErrorMessage.module.css';

type errorMessageType = {
  text: string | undefined;
};

const ErrorMessage = ({ text }: errorMessageType) => {
  return <p className={styles.errorMessage}>{text}</p>;
};

export default ErrorMessage;
