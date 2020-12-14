import Link from 'next/link';
import { Fragment } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Home() {
  const indexImg = 'doormenora.jpeg';
  const logoImg = 'logoOrakel.jpeg';
  // const candleImg = 'ZINK.jpeg';
  return (
    <Layout title="Orakel Förlag">
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
                  <h1>Profetia</h1>
                </Link>
                <h1>Böcker</h1>
                <h1>Författare</h1>
                <h1>Projekt</h1>
                <h1>Kontakt</h1>
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
