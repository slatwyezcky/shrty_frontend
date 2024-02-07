import styles from './notfound.module.css';
import image from '../../assets/images/404.png';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={image} alt="Dog image" className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.header}>404</h2>
        <p className={styles.text}>
          Looks like we don&apos;t have this short link. Do you want to create
          it?
        </p>
        <button className={styles.btn} onClick={() => navigate('/')}>
          Go and create short link
        </button>
      </div>
    </div>
  );
};
