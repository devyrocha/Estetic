import styles from "./Footer.module.css";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <h3>Quem Somos?</h3>
          <p>
            Endereço: Rua Fulano de Tal, n° 8556 - Bairro Da Garrafa Azul -
            Manaus, Amazonas, 2° andar, sala 404
          </p>

          <p>Telefones: (55) 95555-5555 (55)95555-5554</p>
        </div>
        <div className={styles.icons}>
          <ul>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <SiInstagram />
              </a>
            </li>

            <a href="https://www.facebook.com" target="_blank">
              <li>
                <SiFacebook />
              </li>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <li>
                <SiLinkedin />
              </li>
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
