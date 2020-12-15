import { Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/Profetia.module.scss';

export default function profetia() {
  return (
    <Layout title="Orakel Förlag - Författare">
      <div className={styles.container}>
        <main className={styles.main}>
          <Grid>
            <strong className={styles.description}>
              Evelina Varas
              <br />
              <br />
              Tal Berenstein
            </strong>
          </Grid>
        </main>
      </div>
    </Layout>
  );
}
