import { AnimatePresence, motion } from 'framer-motion';
import useStore from '../../store';
import styles from './error.module.css';

const ErrorPopUp = () => {
  const error = useStore((state) => state.error);

  return (
    <AnimatePresence>
      {error && (
        <motion.div
          className={styles.pop_up}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {error}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorPopUp;
