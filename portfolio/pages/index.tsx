import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Edison</title>
        <meta name="description" content="Portfolio de Edison Alcocer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
        
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
