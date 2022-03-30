import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const MyHeader = () => {
  return(
    <header className={styles.header}>
          <h1 className={styles.title}>
            <Image
              src={"/imgs/react.png"}
              height={40}
              width={40}
              alt="react"
            />
            {' '}
            Edison Alcocer
          </h1>
          <h1 className={styles.description}>
            <a href="https://github.com/edav03">
              GitHub
              <Image
               src={"/imgs/github.png"}
               height={40}
               width={40}
               alt="github"
              />
            </a>
          </h1>
          <h1 className={styles.description}>
            <a href="">
              {' '}
              Projects
              <Image
               src={"/imgs/terminal.png"}
               height={40}
               width={40}
               alt="github"
              />
            </a>
          </h1>
          <h1 className={styles.description}>
            <a href="">
              {' '}
              Resume
              <Image
               src="/imgs/resume.png"
               height={40}
               width={40}
               alt="github"
              />
            </a>
          </h1>
        </header>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Edison</title>
        <meta name="description" content="Portfolio de Edison Alcocer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {MyHeader()}
        
      <div className={styles.body}>
        <h1>Hi there, i’m Edison</h1>

        <h3 className={styles.text}>
          I’m a computer science student from Gandia, Spain. I love computer programming, i have knowledge of java and recently i’m trying React framework,  nextjs, and typescript.
        </h3>

        <Image
          src="/imgs/user.jpg"
          height={350}
          width={350}
          alt="Edison Alcocer"
        />
      </div>
      </main>
    </div>
  )
}

export default Home
