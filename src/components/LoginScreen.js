import styles from "./LoginScreen.module.css";
import photo4 from "../img/4.jpg";
import logo from "../img/logo.png";

function LoginScreen() {
  return (
    <div className={styles.main}>
      <h2>Login de funcionários</h2>

      <div className={styles.container}>
        <div className={styles.inputs}>
          <img className={styles.photo} src={photo4} alt="foto login" />
        </div>

        <div className={styles.inputs}>
          <form>
            <img src={logo} />
            <label>Usuário</label>
            <input type="text" placeholder="Digite seu usuário" />

            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />

            <button className={styles.btn}>Entrar</button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default LoginScreen;
