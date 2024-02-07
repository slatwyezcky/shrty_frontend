import { TbHandFinger } from '../../assets/icons';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        shrty.me
        <TbHandFinger size={20} className={styles.icon} />
      </div>
      <div className={styles.description}>
        Simple way to make your long links very shørt. Shorten your link and
        make it efficient for your customers!
      </div>
    </header>
  );
};

export default Header;
