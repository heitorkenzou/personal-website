import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Meio() {
  return (
    <div className="social">
      <div class="rrrrr">
        <Image className="imagem" src="/Screenshot_11.png" width={120} height={140} />
      </div>
      <div className="text">
        <p>
          Desenvolvedor full stack <br />
          <br />
          Conhecimentos em: ReactJS, NEXTjs e nodejs{" "}
        </p>
      </div>
      <p style={{marginTop: '30px', fontSize: '20px', color: 'white', fontWeight: 'bold'}}>Technologies:</p>
      <div className="languages">
       <img src="https://img.shields.io/badge/nextjs%20-%23121011.svg?&style=for-the-badge&logo=next.js&logoColor=%0000ff%22" style={{height: '50px'}}></img>
       <img style={{height: '50px'}} alt="CSS3" src="https://img.shields.io/badge/css3%20-%23121011.svg?&style=for-the-badge&logo=css3&logoColor=blue"/>
      <img style={{height: '50px'}} src="https://img.shields.io/badge/javascript%20-%23121011.svg?&style=for-the-badge&logo=javascript&logoColor=%0000ff%22"></img>
      </div>
    </div>
  );
}
