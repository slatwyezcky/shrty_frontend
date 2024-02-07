import styles from './redirect.module.css';
import loader from '../../assets/images/loader.svg';

export default function Redirect() {
  return (
    <div className={styles.redirect}>
      <div>Redirecting...</div>
      <img className={styles.loader} src={loader} alt="loader" />
    </div>
  );
}
