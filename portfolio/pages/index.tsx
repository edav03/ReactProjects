import { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import MyHead from "../components/MyHead";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";

export const HomeBody = () => {
  const salute = "Hi there, i'm Edison";
  const description =
    "I'm a computer science student from Gandia, Spain " +
    "I love computer programming, i have knowledge of java and recently " +
    "I'm trying React framework,  nextjs, and typescript.";

  return (
    <div className={styles.body}>
      <div className={styles.txt}>
        <h1>{salute}</h1>
        <h3>{description}</h3>
      </div>

      <div className={styles.img}>
        <Image
          src="/imgs/edison2.jpg"
          height={350}
          width={350}
          alt="Edison Alcocer"
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [userName, setUserName] = useState<string>("Edison");
  const [currentPage, setCurrentPage] = useState<string>("HOME");

  return (
    <div className="doc">
      <MyHead />

      <main className={styles.main}>
        <MyHeader userName={userName} currentPage={currentPage} />

        <HomeBody />

        <MyFooter />
      </main>
    </div>
  );
};

export default Home;
