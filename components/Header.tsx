import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = props => (
  <Link href="/">
    <div className={styles.Header}>{props.title}</div>
  </Link>
);

export default Header;
