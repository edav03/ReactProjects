import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import MyHead from "../components/MyHead";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";

export const ResumeBody = () => {
    return(
        <div className={styles.body}>
            <h1 className={styles.PrTitle}>RESUME</h1>

            <nav className={styles.objs}>
                <div className={styles.nav}><h1>EDUCATION</h1></div>

                <div className={styles.nav}><h1>WORK EXPERIENCE</h1></div>

                <div className={styles.nav}><h1>CONTACT ME</h1></div>
            </nav>
        </div>
    )
}

export const Resume = () => {
    const [userName, setUserName] = useState<string>("Edison");
    const [currentPage, setCurrentPage] = useState<string>("RESUME");
  
    return (
      <div>
        <MyHead />
  
        <main className={styles.main}>
          <MyHeader userName={userName} currentPage={currentPage} />
  
          <ResumeBody />
  
          <MyFooter />
        </main>
      </div>
    );
  };
  
  export default Resume;