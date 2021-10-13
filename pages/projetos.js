import styles from "../styles/Home.module.css";
import Image from "next/image";
import Footer from "./footer";
import Headerzada from "./header";

export default function Projetos() {
  return (
      <div className={styles.container}>
      <Headerzada />
      <div className="box">
        <a href="https://github.com/heckenzou1/personal-website" target="_blank">
        <p style={{fontSize: '24px', paddingTop: '8px', marginLeft: '20px', fontFamily: 'Montserrat', fontWeight: 'bold'}}>This portfolio</p>

        <div id="item" style={{backgroundImage: `url(${'/ummm.png'})`}}>
        </div>
        </a>
        <p style={{fontSize: '17px'}}>Portfolio pessoal feito com nextjs<br />
        será atualizado conforme necessidade<br /> e desenvolvimento de habilidades minhas</p>
        <div id="item"></div>
        <div id="item"></div>
        <div id="item"></div>
        <div id="item"></div>
        </div>

      <Footer />
      </div>
  );
}

