import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import {
  FiShare2,
  FaRegCopy,
  FaExternalLinkAlt,
  FaDownload,
} from '../../assets/icons';
import styles from './linkinfo.module.css';
import useStore from '../../store';
import { AnimatePresence, motion } from 'framer-motion';
import ShareModal from '../ShareModal';

const LinkInfo = () => {
  const link = useStore((state) => state.link);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  function handleCopy() {
    setCopied(true);
    navigator.clipboard.writeText(`https://shrty.me/${link}`);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    const canvas = document.querySelector('#qr_code');
    const imageUrl = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `qrcode.jpeg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <AnimatePresence>
      {link && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.links}>
            <a
              className={styles.link}
              href={`https://shrty.me/${link}`}
              target="_blank"
              rel="noreferrer"
            >
              shrty.me/{link}
              <FaExternalLinkAlt size={15} />
            </a>
            <div className={styles.btn_container}>
              <button
                className={`${styles.btn} ${styles.copy_btn} ${
                  copied && styles.success_btn
                }`}
                onClick={handleCopy}
              >
                <FaRegCopy size={15} />
                {copied ? 'Copied to clipboard' : 'Copy to clipboard'}
              </button>
              <button
                className={styles.btn}
                // onFocus={() => setShowShareModal(true)}
                onClick={() => setShowShareModal((prev) => !prev)}
                onBlur={() => setShowShareModal(false)}
              >
                <FiShare2 size={15} />
              </button>
              <AnimatePresence>
                {showShareModal && (
                  <ShareModal link={`https://shrty.me/${link}`} />
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.qr_container}>
            <QRCodeCanvas value={`https://shrty.me/${link}`} id="qr_code" />
            <div className={styles.hover} onClick={handleDownload}>
              <FaDownload size={20} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LinkInfo;
