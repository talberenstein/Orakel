import Head from 'next/head'
import Link from 'next/link'
import { Grid, Image } from 'semantic-ui-react'
import styles from '../styles/Home.module.css'



export default function Home() {
  const indexImg = 'doormenora.jpeg'
  const logoImg = 'logoOrakel.jpeg'
  const lightImg = 'candle2.gif'
  return (
    <div className={styles.container}>
      <Head>
        <title>Orakel Förlag</title>
        <link rel="icon" href="/favicon.ico" />
        <div className={styles.header}>
            <strong className={styles.kop}>KÖP</strong>
        </div>

      </Head>
    

      <main className={styles.main}>

        <Grid columns={2}>
          <Grid.Column>
            <Grid.Row>
                <Image className={styles.logo} src={logoImg} size="small"/>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column className={styles.menu}>
                <Link href="/profetia"> 
                  <h1 className={styles.title}>PROFETIA</h1>
                </Link>
              <h1 className={styles.title}>BÖCKER</h1>
              <h1 className={styles.title}>FÖRFATTARE</h1>
              <h1 className={styles.title}>PROJEKT</h1>
              <h1 className={styles.title}>KONTAKT</h1>
              <h1 className={styles.title}>MANUS</h1>
              </Grid.Column>
            </Grid.Row>
            
          </Grid.Column>
          
          <Grid.Column>
              <Image className={styles.imgIndex} src={indexImg} size="large" />
          </Grid.Column>
        </Grid>
      </main>

      <Image className={styles.light} src={lightImg} size="small"/>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
