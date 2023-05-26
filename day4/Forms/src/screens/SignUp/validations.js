import { object, string, ref } from "yup";

const messages = {
  required: "Bu alan zorunludur",
  email: "Geçerli bir e-posta adresi girin",
  min: "Şifreniz en az 6 karakter olmalıdır",
  oneOf: "Şifreler eşleşmiyor",
};

const validations = object({
  name: string().required(messages.required),
  email: string().email(messages.email).required(messages.required),
  password: string().min(6, messages.min).required(messages.required),
  confirmPassword: string()
    .oneOf([ref("password")], messages.oneOf)
    .required(messages.required),
});

export default validations;
