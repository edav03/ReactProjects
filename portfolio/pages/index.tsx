import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyHeader from '../components/MyHeader'
import MyBody from '../components/MyBody'
import MyFooter from '../components/MyFooter'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  const [userName, setUserName] = useState<string>("Edison")

  return (
    <div>
      <Head>
        <title>Portfolio Edison</title>
        <meta name="description" content="Portfolio de Edison Alcocer" />
        <link rel="icon" href="/imgs/nextjs.png" />
      </Head>

      <main className={styles.main}>
        
        <MyHeader title={userName}/>
        
        <MyBody />

        <MyFooter />

      </main>
    </div>
  )
}

export default Home