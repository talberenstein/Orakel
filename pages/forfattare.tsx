import { Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/SamplePage.module.scss';

type ForfattareProps = {
  title: string;
};

const forfattare: React.FC<ForfattareProps> = ({
  title = 'Orakel Förlag - Författare'
}) => (
  <Layout title={title}>
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

export default forfattare;
