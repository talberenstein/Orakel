import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from '../styles/Header.module.scss';

// no children defined here
type LayoutProps = {
  title: string;
};

const Header: FunctionComponent<LayoutProps> = ({ title }) => (
  <Link href="/">
    <div className={styles.Header}>{title}</div>
  </Link>
);

export default Header;
