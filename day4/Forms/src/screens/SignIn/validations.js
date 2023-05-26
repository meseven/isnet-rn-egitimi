import { object, string } from "yup";

const messages = {
  required: "Bu alan zorunludur",
  email: "Geçerli bir e-posta adresi girin",
  min: "Şifreniz en az 6 karakter olmalıdır",
};

const validations = object({
  email: string().email(messages.email).required(messages.required),
  password: string().min(6, messages.min).required(messages.required),
});

export default validations;
