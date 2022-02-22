import { useState } from "react";
import Styles from "./styles.module.scss";

export function TellUsForm() {

  const [rangeValue, setRangeValue] = useState(5)
  
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

        <div className={Styles.sliderContainer}>
          <label htmlFor="investimento">Quanto você pretende investir?</label>
          <div className={Styles.slideField}>
            <input type="range" id="investimento" min="0" max="10.00"  onChange={event =>{setRangeValue(Number(event.target.value))}} />
            <div className={Styles.rangeValue}>{rangeValue}k</div>

          </div>

          <div className={Styles.sliderTracinhos}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          

        </div>
        
        <label htmlFor="ideia">Descreva sua ideia :)</label>
        <textarea id="ideia"></textarea>
        
        <button type="submit">Ok, enviar!</button>
      </fieldset>
    </form>
  );
}
