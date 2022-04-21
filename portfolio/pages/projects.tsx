import { useState } from "react";
import styles from "../styles/Home.module.css";
import MyHead from "../components/MyHead";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";

export const Projects = () => {
  const [userName, setUserName] = useState<string>("Edison");
  const [currentPage, setCurrentPage] = useState<string>("Projects");

  return (
    <div>
      <MyHead />

      <main className={styles.main}>
        <MyHeader userName={userName} currentPage={currentPage} />
        <MyFooter />
      </main>
    </div>
  );
};

export default Projects;
