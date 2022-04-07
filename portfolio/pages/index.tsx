import { useState } from 'react'
import styles from '../styles/Home.module.css'
import MyHead from '../components/MyHead'
import MyHeader from '../components/MyHeader'
import InBody from '../components/InBody'
import MyFooter from '../components/MyFooter'

const Home = () => {

  const [userName, setUserName] = useState<string>("Edison")

  return (
    <div>
      
      <MyHead />

      <main className={styles.main}>
        
        <MyHeader title={userName}/>

        <InBody />

        <MyFooter />

      </main>
    </div>
  )
}

export default Home