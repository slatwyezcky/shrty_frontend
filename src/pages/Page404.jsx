import { NotFound } from '../components/NotFound';
import { AnimatePresence, motion } from 'framer-motion';

const Page404 = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <NotFound />
      </motion.div>
    </AnimatePresence>
  );
};

export default Page404;
