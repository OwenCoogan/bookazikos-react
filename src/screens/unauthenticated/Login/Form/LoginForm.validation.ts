import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
      .email("Email invalide")
      .required("Ce champ est obligatoire"),
  password: Yup.string()
      .min(5, "trop petit")
      .max(500, "trop long!")
      .required("Ce champ est obligatoire"),
});
