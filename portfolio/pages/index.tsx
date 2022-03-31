import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyHeader from '../components/MyHeader'
import MyBody from '../components/MyBody'
import MyFooter from '../components/MyFooter'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Edison</title>
        <meta name="description" content="Portfolio de Edison Alcocer" />
        <link rel="icon" href="/imgs/nextjs.png" />
      </Head>

      <main className={styles.main}>
        
        <MyHeader />
        
        <MyBody />

        <MyFooter />

      </main>
    </div>
  )
}

export default Home