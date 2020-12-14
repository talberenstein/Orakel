import Head from 'next/head';
import Link from 'next/link';
import { Grid, Image, Message } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/Profetia.module.scss';

export default function profetia() {
  const logoImg = 'logoOrakel.jpeg';
  const profetiaImg1 = 'candle.gif';
  const profetiaImg2 = 'profetia/profetia_2.jpg';
  const profetiaImg3 = 'profetia/profetia_3.jpg';
  const profetiaImg4 = 'profetia/profetia_4.jpg';
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Grid></Grid>
        </main>
      </div>
    </Layout>
  );
}
