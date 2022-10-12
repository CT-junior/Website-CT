import 'react-toastify/dist/ReactToastify.css';

import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Select } from "../Select";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { leadFormData, leadFormSchema, toastOptions } from './utils';

import Styles from "./styles.module.scss";
import { ButtonOrange } from "../../ButtonOrange";
import { useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import { toast, ToastContainer } from "react-toastify";

export function TellUsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
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
  }, [investmentValue]);

  const handleFormSubmit: SubmitHandler<leadFormData> = async (values) => {
    if (!validateCaptcha(values.captcha)) {
      toast.error(
        'Os caractéres da validação não são iguais!',
        toastOptions
      );
      return;
    }
    toast.loading("Enviando.", toastOptions);

    const body = JSON.stringify({
      name: values.name,
      email: values.email,
      contact: values.tel,
      costPretension: PriceRange,
      area: values.area,
      idea: values.idea
    })

    try {
      await fetch('/api/email', {
        method: "POST",
        body: body
      })
      toast.dismiss();
      toast.success(
        'E-mail enviado com sucesso!',
        toastOptions
      )
      reset();
    } catch (error) {
      toast.error(
        'Ocorreu um erro, tente novamente mais tarde!',
        toastOptions
      );
    }
  };

  // Component did mount
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

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

      <Input
        name="captcha"
        label="Reescreva os caractéres abaixo para verificar que é humano!"
        error={errors.captcha}
        {...register("captcha")}
      />

      <LoadCanvasTemplateNoReload />

      <div className={Styles.buttonContainer}>
        <ButtonOrange type="submit">Ok, enviar!</ButtonOrange>
      </div>
      <ToastContainer />
    </form>
  );
}
