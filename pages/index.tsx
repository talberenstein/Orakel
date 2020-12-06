import Link from 'next/link';
import { Grid, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const indexImg = 'doormenora.jpeg';
  const logoImg = 'logoOrakel.jpeg';
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Grid columns={2}>
            <Grid.Column>
              <Grid.Row>
                <Image className={styles.logo} src={logoImg} size="small" />
              </Grid.Row>

              <Grid.Row>
                <Grid.Column className={styles.menu}>
                  <Link href="/profetia">
                    <h1 className={styles.title}>Profetia</h1>
                  </Link>
                  <h1 className={styles.title}>Böcker</h1>
                  <h1 className={styles.title}>Författare</h1>
                  <h1 className={styles.title}>Projekt</h1>
                  <h1 className={styles.title}>Kontakt</h1>
                  <h1 className={styles.title}>Manus</h1>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column>
              <Image className={styles.imgIndex} src={indexImg} size="medium" />
            </Grid.Column>
          </Grid>
        </main>
      </div>
    </Layout>
  );
}
