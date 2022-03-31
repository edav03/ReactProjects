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
               alt="edav03"
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

export default MyHeader