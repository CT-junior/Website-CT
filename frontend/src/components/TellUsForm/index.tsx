import Styles from "./styles.module.scss";

export function TellUsForm() {
  return (
    <form action="" className={Styles.tellUsForm}>
      <fieldset>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="phone">Telefone</label>
        <input type="tel" name="phone" id="phone" required />

        <label htmlFor="area">Qual seu interesse?</label>
        <select name="area" id ="area" required>
          <option selected disabled value=""></option>
          <option value="tecnologia">Tecnologia</option>
          <option value="engenharia-civil">Engenharia Civil</option>
        </select>

        <label htmlFor="investimento">Quanto você pretende investir?</label>
        <input type="range" id="investimento" min="0" max="5000" />

        <label htmlFor="ideia">Descreva sua ideia :)</label>
        <textarea id="ideia"></textarea>
        
        <button type="submit">Ok, enviar!</button>
      </fieldset>
    </form>
  );
}
