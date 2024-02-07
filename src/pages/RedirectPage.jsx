import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Redirect from '../components/Redirect';
import { AnimatePresence, motion } from 'framer-motion';
import useStore from '../store';

export default function RedirectPage() {
  const { alias } = useParams();
  const navigate = useNavigate();
  const setError = useStore((state) => state.setError);

  async function redirect() {
    if (alias === 'undefined') return navigate('/');
    console.log(import.meta.env.VITE_API_URL);
    try {
      const {
        data: { url },
      } = await axios.get(`${import.meta.env.VITE_API_URL}/${alias}`);
      console.log(url);
      window.location.replace(url);
    } catch (error) {
      switch (error?.response?.status) {
        case 404:
          return navigate('/404');
        default:
          setError('Sorry, server is temporarily not responding');
          setTimeout(() => setError(null), 3000);
          return navigate('/');
      }
    }
  }
  useEffect(() => {
    redirect();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Redirect />
      </motion.div>
    </AnimatePresence>
  );
}
