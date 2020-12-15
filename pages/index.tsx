import Link from 'next/link';
import { Grid, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const indexImg = 'doormenora.jpeg';
  const logoImg = 'logoOrakel.jpeg';
  // const candleImg = 'ZINK.jpeg';
  return (
    <Layout title="Orakel Förlag - Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            <Image className={styles.logo} src={logoImg} size="tiny" />
          </div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={7}>
                <Link href="/profetia">
                  <h1 className={styles.title}>Profetia</h1>
                </Link>
                <h1>Böcker</h1>
                <Link href="/forfattare">
                  <h1 className={styles.title}>Författare</h1>
                </Link>
                <h1>Projekt</h1>
                <Link href="/kontakt">
                  <h1 className={styles.title}>Kontakt</h1>
                </Link>
                <h1>Manus</h1>
              </Grid.Column>
              <Grid.Column width={8}>
                <div>
                  <Image className={styles.imgIndex} src={indexImg} />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </main>
      </div>
    </Layout>
  );
}
