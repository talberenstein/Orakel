import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <Link href="/">
    <div className={styles.Header}>{'>'} Orakel Förlag</div>
  </Link>
);

export default Header;
