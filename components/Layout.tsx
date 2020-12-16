import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import navButtons from '../config/buttons';
import styles from '../styles/Layout.module.scss';
import Head from 'next/head';

// no children defined here
type LayoutProps = {
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <div className={styles.Layout}>
    <Head>
      <title> {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header title={title} />
    <div className={styles.Content}>{children}</div>
    <NavBar navButtons={navButtons} />
  </div>
);

export default Layout;
