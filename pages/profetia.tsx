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
     <Link href="/">
         <div>
              <Image className={styles.logo} src={logoImg} size="tiny"/>
              <strong className={styles.title}>↩ Hemsida</strong>
              <strong className={styles.title}> | </strong>
              <strong className={styles.title}> Böcker ↪</strong>
         </div>
       
    </Link>
     <main className={styles.main}>
     <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={profetiaImg1} />
      </Grid.Column>
      <Grid.Column width={10}>
          <div className={styles.text}>
             <p>DIOS NOS BENDIGA PERO NO NOS GUARDE</p> 
             <p>av begripliga skäl dunkla och tvetydiga / den i någon mån alltid ovissa utgången / där gudomen låter göra sin röst hörd / för vilket de blivit ökända</p> 
             <p>bedjen, och eder skall varda givet / söken, och I skolen finna / klappen, och för eder skall varda upplåtet</p> 
             <p>Sveriges enda heliga förlag / klarsynta böcker av kompakt vansinne</p> 
          </div>

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
