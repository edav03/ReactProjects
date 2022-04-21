import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

interface IMyHeader {
  userName: string;
  currentPage: string;
}

const MyHeader = (args: IMyHeader) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">
          <a className={styles.descriptionHome}>
            <Image src={"/imgs/react.png"} height={40} width={40} alt="react" />
            {`${args.userName} | ${args.currentPage}`}
          </a>
        </Link>
      </h1>

      <h1 className={styles.description}>

        <Link href="/projects">
          <a className={styles.descriptionLinks}>
            Projects
            <Image
              src={"/imgs/terminal.png"}
              height={40}
              width={40}
              alt="edav03"
            />
          </a>
        </Link>

        <a className={styles.descriptionLinks}>
          Resume
          <Image src="/imgs/resume.png" height={40} width={40} alt="github" />
        </a>

        <a
          className={styles.descriptionLinks}
          href="https://github.com/edav03"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <Image src={"/imgs/github.png"} height={40} width={40} alt="github" />
        </a>

      </h1>
    </header>
  );
};

export default MyHeader;
