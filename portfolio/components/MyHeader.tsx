import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const MyHeader = ({title} : {title?: string }) => {
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
            {title}
            {' | HOME'}
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
            <Link href="/posts/projects">
              <a>
              {' '}
              Projects
              <Image
               src={"/imgs/terminal.png"}
               height={40}
               width={40}
               alt="edav03"
              />
              </a>
            </Link>
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

export default MyHeader