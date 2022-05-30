import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import MyHead from "../components/MyHead";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";

export const ProjBody = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.PrTitle}>PROJECTS</h1>

      <div className={styles.objs}>
        <div className={styles.circles}>
          <Link href="">
            <Image
              src="/imgs/calculator.png"
              alt="Future projects"
              layout="responsive"
              width={200}
              height={200}
            />
          </Link>

          <h1 className={styles.text}>Calculator</h1>
        </div>

        <div className={styles.circlesMain}>
          <Link href="">
            <Image
              src="/imgs/todo.png"
              alt="Future projects"
              layout="responsive"
              width={100}
              height={100}
            />
          </Link>

          <h1 className={styles.textMain}>To Do</h1>
        </div>

        <div className={styles.circles}>
          <Link href="">
            <Image
              src="/imgs/list.png"
              alt="Future projects"
              layout="responsive"
              width={200}
              height={200}
            />
          </Link>

          <h1 className={styles.text}>List</h1>
        </div>
      </div>
    </div>
  );
};

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
