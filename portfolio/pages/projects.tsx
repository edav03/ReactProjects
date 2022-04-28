import { useState } from "react";
import Image from "next/image"
import styles from "../styles/Home.module.css";
import MyHead from "../components/MyHead";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";

export const ProjBody = () => {
  return(
    <div className={styles.body}>

      <h1 className={styles.PrTitle}>PROJECTS</h1>

      <div className={styles.objs}>
        <div className={styles.circles}>

          <Image
            src="/imgs/user.jpg"
            height={200}
            width={200}
            alt="Future projects"
          />

          <h1 className={styles.text}>TEXT</h1>
        </div>

        <div className={styles.circles}>

          <Image
            src="/imgs/user.jpg"
            height={200}
            width={200}
            alt="Future projects"
          />

          <h1 className={styles.text}>TEXT</h1>
        </div>

        <div className={styles.circles}>

          <Image
            src="/imgs/user.jpg"
            height={200}
            width={200}
            alt="Future projects"
          />

          <h1 className={styles.text}>TEXT</h1>
        </div>

      </div>
      
    </div>
  )
}

export const Projects = () => {
  const [userName, setUserName] = useState<string>("Edison");
  const [currentPage, setCurrentPage] = useState<string>("PROJECTS");

  return (
    <div>
      <MyHead />

      <main className={styles.main}>
        <MyHeader userName={userName} currentPage={currentPage} />
        <ProjBody />
        <MyFooter />
      </main>

    </div>
  );
};

export default Projects;
