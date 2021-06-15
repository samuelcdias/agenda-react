import * as yup from 'yup'

const phoneRegExp = /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/

const namesRegExp = /^[a-z ,.'-]+$/i

const schema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, 'Mínimo 2 caracteres.')
    .matches(namesRegExp, 'Nome inválido')
    .required('Nome é obrigatório.'),
  last_name: yup
    .string()
    .min(2, 'Mínimo 2 caracteres.')
    .matches(namesRegExp, 'Nome inválido')
    .required('Sobrenome é obrigatório.'),
  phone_number: yup
    .string()
    .matches(phoneRegExp, 'Número inválido')
    .required('Telefone é obrigatório.'),
  email: yup.string().email('Digite um email válido.'),
  category: yup.string(),
})

export default schema
