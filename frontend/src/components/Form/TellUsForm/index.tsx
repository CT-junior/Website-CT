import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Select } from "../Select";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Styles from "./styles.module.scss";
import { ButtonOrange } from "../../ButtonOrange";
import { useEffect, useState } from "react";


type leadFormData = {
  name: string;
  email: string;
  tel: number;
  area: string;
  idea: string;
  investment: number;
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const leadFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  email: yup.string().required("E-mail obrigatório.").email("E-mail inválido"),
  tel: yup
    .string()
    .required("Número de telefone obrigatório.")
    .matches(phoneRegExp, "Número de telefone inválido.")
    .min(10, "Número de telefone inválido.")
    .max(11, "Número de telefone inválido."),
  area: yup.string().required().notOneOf([null, 'default'], 'Seleção de área obrigatória.'),
  idea: yup.string().required("Campo obrigatório."),
  investment: yup.number(),
});

export function TellUsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(leadFormSchema),
  });

  const investmentValue = watch("investment");
  const [PriceRange, setPriceRange] = useState('')

  useEffect(() => {
    if (investmentValue <= 10) {
      setPriceRange("Até 10k");
    } else if (investmentValue <= 20) {
      setPriceRange("Entre 10k e 20k");
    } else if (investmentValue <= 30) {
      setPriceRange("Entre 20k e 30k");
    } else if (investmentValue < 40) {
      setPriceRange("Entre 30k e 40k");
    } else {
      setPriceRange("Mais de 40k");
    }
  });

  const handleFormSubmit: SubmitHandler<leadFormData> = (values) => {
    console.log(values);
  };

  return (
    <form
      className={Styles.formContainer}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        name="name"
        label="Nome"
        error={errors.name}
        {...register("name")}
      />
      <Input
        name="email"
        label="Email"
        error={errors.email}
        {...register("email")}
      />
      <Input
        name="tel"
        label="Telefone"
        error={errors.tel}
        {...register("tel")}
      />
      <Input
        name="investment"
        label="Quanto pretende investir?"
        slidebar
        priceRange={PriceRange}
        error={errors.investment}
        {...register("investment")}
      />
      <Select
        name="area"
        label="Selecione uma área"
        defaultValue={"default"}
        error={errors.area}
        {...register("area")}
      >
        <option value="default" disabled>
          Selecione...
        </option>
        <option value="tecnologia">Tecnologia</option>
        <option value="engenharia-civil">Engenharia Civil</option>
      </Select>

      <TextArea
        name="idea"
        label="Descreva sua ideia :)"
        error={errors.idea}
        {...register("idea")}
      />

      <ButtonOrange type="submit">Ok, enviar!</ButtonOrange>
    </form>
  );
}
