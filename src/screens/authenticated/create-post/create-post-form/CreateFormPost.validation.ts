import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
      .min(5, "trop petit")
      .max(50, "trop long!")
      .required("Ce champ est obligatoire"),
  content: Yup.string()
      .min(5, "trop petit")
      .max(500, "trop long!")
      .required("Ce champ est obligatoire"),
});
