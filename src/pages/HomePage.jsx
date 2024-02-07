import { LinkInfo, Form, Header, ErrorPopUp } from '../components';
import { AnimatePresence, motion } from 'framer-motion';

export default function HomePage() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <main>
          <Form />
          <LinkInfo />
        </main>
        <ErrorPopUp />
      </motion.div>
    </AnimatePresence>
  );
}
