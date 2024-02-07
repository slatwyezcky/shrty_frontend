import { useState } from 'react';
import styles from './form.module.css';
import axios from 'axios';
import useStore from '../../store';
import { checkAlias, checkURL } from '../../utils';

const Form = () => {
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');

  const setLink = useStore((state) => state.setLink);
  const setError = useStore((state) => state.setError);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!checkURL(url)) {
      setError('You should provide correct URL');
      setTimeout(() => setError(null), 3000);
      return;
    }
    if (!checkAlias(alias)) {
      console.log(checkAlias(alias));
      setError('Alias should consist only of english letters and digits');
      setTimeout(() => setError(null), 3000);
      return;
    }
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}`, {
        url,
        alias,
      });
      setLink(data.alias);
    } catch (error) {
      switch (error?.response?.status) {
        case 409:
          setError('Sorry! Looks like this alias is already taken.');
          setTimeout(() => setError(null), 3000);
          break;
        default:
          setError('Sorry! Looks like server is not responding.');
          setTimeout(() => setError(null), 3000);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={`${styles.input} ${styles.block}`}
        type="text"
        placeholder="Enter your long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="OPTIONAL: Enter your prefer alias or brand"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
      />
      <button className={styles.btn}>make it shørt</button>
    </form>
  );
};

export default Form;
