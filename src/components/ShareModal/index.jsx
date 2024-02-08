import { motion } from 'framer-motion';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import PropTypes from 'prop-types';

import styles from './sharemodal.module.css';

export default function ShareModal({ link }) {
  return (
    <motion.div
      className={styles.share_modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <EmailShareButton url={link}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={link}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton url={link}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <TwitterShareButton url={link}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={link}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </motion.div>
  );
}

ShareModal.propTypes = {
  link: PropTypes.string,
};
