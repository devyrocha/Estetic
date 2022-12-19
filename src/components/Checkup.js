import styles from "./Checkup.module.css";

function Checkup() {
  return (
    <div className={styles.main}>
      <h2>Formulário de Agendamento</h2>

      <div className={styles.form}>
        <form>
          <label>Nome Completo:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Confirmação de Email:</label>
          <input type="email" />
          <label>Telefone:</label>
          <input type="text" />
          <label>Data de Agendamento:</label>
          <input type="date" />
          <label>Hora:</label>
          <input type="time" />
        </form>

        <div className={styles.servicesMenu}>
          <h4>Serviços</h4>

          <div className={styles.inputs}>
            <div>
              <input type="checkbox" name="check" id="check" />
              <label>Micropigmentação</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="check" />
              <label>Limpeza de pele</label>
            </div>

            <div>
              <input type="checkbox" name="check" id="check" />
              <label>Massoterapia dos pés</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="check" />
              <label>Massoterapia das mãos</label>
            </div>

            <div>
              <input type="checkbox" name="check" id="check" />
              <label>SPA</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="check" />
              <label>Clareamento de pele</label>
            </div>

            <div>
              <input type="checkbox" name="check" id="check" />
              <label>Bronzeamento</label>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btn} type="submit">
        Enviar
      </button>
    </div>
  );
}

export default Checkup;
