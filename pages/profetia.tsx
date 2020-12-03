import Head from 'next/head'
import Link from 'next/link'
import { Grid, Image, Message } from 'semantic-ui-react'
import styles from '../styles/Profetia.module.css'

export default function profetia() {
    const logoImg = 'logoOrakel.jpeg'
    const profetiaImg1 = 'candle.gif'
    const profetiaImg2 = 'profetia/profetia_2.jpg'
    const profetiaImg3 = 'profetia/profetia_3.jpg'
    const profetiaImg4 = 'profetia/profetia_4.jpg'
    return (
    <div className={styles.container}>
     <Head>
         <title>Profetia - Orakel Förlag</title>
         <link rel="icon" href="/favicon.ico" />
     </Head>
     <main className={styles.main}>
         <Link href="/">
            <Image className={styles.logo} src={logoImg} size="small"/>
         </Link>
     <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={profetiaImg1} />
      </Grid.Column>
      <Grid.Column width={10}>
        
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src={profetiaImg1}/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={profetiaImg4} />
      </Grid.Column>
      <Grid.Column width={10}>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src={profetiaImg2} />
      </Grid.Column>
    </Grid.Row>
  </Grid>

 </main>
        </div>
    )
}
