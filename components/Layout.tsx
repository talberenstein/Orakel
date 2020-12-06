import Header from './Header';
import NavBar from './NavBar';
import navButtons from '../config/buttons';
import styles from '../styles/Layout.module.scss';
import Head from 'next/head';

const Layout = props => (
  <div className={styles.Layout}>
    <Head>
      <title> Orakel Förlag</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className={styles.Content}>{props.children}</div>
    <NavBar navButtons={navButtons} />
  </div>
);

export default Layout;
