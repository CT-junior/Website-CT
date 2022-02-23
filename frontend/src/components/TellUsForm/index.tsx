import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";

export function TellUsForm() {

  const [rangeValue, setRangeValue] = useState(10)
  const [priceRange, setPriceRange] = useState('Até 10k')

  useEffect(() => {
    if(rangeValue <= 10){
      setPriceRange('Até 10k')
    }else if(rangeValue <=20){
      setPriceRange('Entre 10k e 20k')
    }else if(rangeValue <=30){
      setPriceRange('Entre 20k e 30k')
    }else if(rangeValue < 40){
      setPriceRange('Entre 30k e 40k')
    }else{
      setPriceRange('Mais de 40k')
    }
  }); 

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
            <input type="range" id="investimento" min="10" max="40.00"  onChange={event =>{setRangeValue(Number(event.target.value))}}  value={rangeValue}/>
            <div className={Styles.sliderTracinhos}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={Styles.rangeValue}>{priceRange}</div> 
        </div>
        
        <label htmlFor="ideia">Descreva sua ideia :)</label>
        <textarea id="ideia"></textarea>
        
        <button type="submit">Ok, enviar!</button>
      </fieldset>
    </form>
  );
}
