import { ToastOptions } from "react-toastify";
import * as yup from "yup";

export const toastOptions: ToastOptions = {
    position: "bottom-center",
    theme: "colored"
};

export type leadFormData = {
    name: string;
    email: string;
    tel: number;
    area: string;
    idea: string;
    investment: number;
    captcha: string;
};

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const leadFormSchema = yup.object().shape({
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
  captcha: yup.string().required("Verificação requerida!")
});