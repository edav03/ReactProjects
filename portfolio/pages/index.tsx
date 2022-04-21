import { useState } from "react";
import styles from "../styles/Home.module.css";
import MyHead from "../components/MyHead";
import MyHeader from "../components/MyHeader";
import InBody from "../components/InBody";
import MyFooter from "../components/MyFooter";

const HomeBody = () => {
  return <></>;
};

const Home = () => {
  const [userName, setUserName] = useState<string>("Edison");
  const [currentPage, setCurrentPage] = useState<string>("HOME");

  return (
    <div>
      <MyHead />

      <main className={styles.main}>
        <MyHeader userName={userName} currentPage={currentPage} />

        <HomeBody />
        <InBody />

        <MyFooter />
      </main>
    </div>
  );
};

export default Home;
