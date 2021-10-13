import styles from "../styles/Home.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="sss">
        <div className="flexned">
          <div className="linkedln">
            <a href="/" className="minhaana" style={{ marginLeft: "10px" }}>
              Linkedin
            </a>
            <FontAwesomeIcon icon={faLinkedin} className="ronaldinho" />
          </div>
<p
className="minhaana"
style={{ paddingTop: "38px", justifySelf: "center" }}
>
            Site feito em nextjs
          </p>
          <div className="github">
 <a
 href="https://www.github.com/heckenzou1"
 target="_blank"
className="minhaana"
>
              Github
            </a>
            <a href="https://www.github.com/heckenzou1" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="git" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}