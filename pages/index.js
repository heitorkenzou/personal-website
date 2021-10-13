import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import Footer from "./footer";
import Headerzada from "./header";
import Meio from "./meio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Headerzada />
      <Meio />
      <Footer />
    </div>
  );
}
