import { Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/Profetia.module.scss';

export default function profetia() {
  return (
    <Layout title="Orakel Förlag - Profetia">
      <div className={styles.container}>
        <main className={styles.main}>
          <Grid>
            <strong className={styles.description}>
              DIOS NOS BENDIGA PERO NO NOS GUARDE av begripliga skäl dunkla och
              tvetydiga / den i någon mån alltid ovissa utgången / där gudomen
              låter göra sin röst hörd / för vilket de blivit ökända bedjen, och
              eder skall varda givet / söken, och I skolen finna / klappen, och
              för eder skall varda upplåtet Sveriges enda heliga förlag /
              klarsynta böcker av kompakt vansinne
            </strong>
          </Grid>
        </main>
      </div>
    </Layout>
  );
}
