import styles from "./Main.module.css";
import photo1 from "../img/1.jpg";
import photo2 from "../img/2.jpg";
import photo3 from "../img/3.jpg";

function Main() {
  return (
    <div className={styles.main}>
      <img src={photo1} className={styles.imgOne} />
      <img src={photo2} className={styles.imgTwo} />
      <img src={photo3} className={styles.imgThree} />

      <div className={styles.content}>
        <h3>Quem Somos?</h3>
        <p>
          Estamos dispostas a proporcionar à você um momento diferenciado, com
          tratamento de excelência! Nossa atenção principal aqui é você! Uma
          clínica de estética feita por nós, pra você! Somos especializados em
          tratamentos de beleza e estética facial, buscando sempre alcançar os
          melhores resultados, oferecendo aos nossos clientes um momento único
          em um ambiente aconchegante. Cuidamos da sua pele, sobrancelha e
          cílios com muito amor.
        </p>
        <p>
          Faça JÁ, seu agendamento <a href="/check">AQUI!</a>
        </p>
      </div>
    </div>
  );
}

export default Main;
