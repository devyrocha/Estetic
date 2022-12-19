import styles from "./Navbar.module.css";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <nav>
      <div className={styles.content}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div>
            <h2>Estética Bem Estar Bem</h2>
            <p>Pensando no seu bem estar</p>
          </div>
        </div>

        <div className={styles.menu}>
          <ul>
            <a href="/">
              <li>Sobre</li>
            </a>

            <a href="/check">
              <li>Agende sua consulta</li>
            </a>

            <a href="/login">
              <li>Login</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
