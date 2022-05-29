import Image from 'next/image'
import styles from '../styles/Home.module.css'

const MyFooter = () => {
    return(
        <div className={styles.footer}>

          <h3>Made By Edison Alcocer</h3>
          
          <a href="https://github.com/edav03">GitHub
            <Image
              src="/imgs/github.png"
              width={20}
              height={20}
              alt="edav03"
            />
          </a>

        </div>
    )
}

export default MyFooter