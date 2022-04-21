import Image from 'next/image'
import styles from '../styles/Home.module.css'

const InBody = () => {
  return(
    <div className={styles.body}>
      <div className={styles.txt}>
        <h1>Hi there, i'm Edison</h1>
    
        <h3>
          I'm a computer science student from Gandia, Spain. I love computer programming, i have knowledge of java and recently i'm trying React framework,  nextjs, and typescript.
        </h3>
    
      </div>
    
      <div className={styles.img}>
        <Image
          src="/imgs/user.jpg"
          height={350}
          width={350}
          alt="Edison Alcocer"
        />
      </div>
    
    </div>
  )
}

export default InBody