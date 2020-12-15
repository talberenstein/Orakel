import { Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/Profetia.module.scss';

export default function profetia() {
  return (
    <Layout title="Orakel Förlag - Kontakt">
      <div className={styles.container}>
        <main className={styles.main}>
          <Grid>
            <strong className={styles.description}>
              Kontakta förlaget för författarporträtt och bokomslag för
              pressanvändning, samt intervjuförfrågningar. Vi tar i nuläget inte
              emot några manus.
              <br />
              <br />
              info@orakelforlag.se
              <br />
              Förlagschef: tal.berenstein@orakelforlag.se
            </strong>
          </Grid>
        </main>
      </div>
    </Layout>
  );
}
