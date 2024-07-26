import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { validate } from 'gerador-validador-cpf';
import { Formik } from 'formik';
import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import routes from "~/router/routes";

interface IFormProps {
  email: string
  cpf: string
  nome: string
  date: string
}

const NewUserPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  function validateForm(values: IFormProps) {
    const errors: Record<string, any> = {};
    if (!values.email) {
      errors.email = 'Obrigatório';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Email inválido';
    }

    if (!values.nome) {
      errors.nome = 'Obrigatório';
    }

    if (!values.cpf) {
      errors.cpf = 'Obrigatório';
    } else if (!validate(values.cpf)) {
      errors.cpf = 'CPF inválido'
    }

    if (!values.date) {
      errors.date = 'Obrigatório';
    }
    return errors;
  }

  return (
    <S.Container>
      <Formik
        initialValues={{ email: '', cpf: '', nome: '', date: '' }}
        validate={validateForm}
        onSubmit={(values, { setSubmitting }) => {
          console.log("🚀 ~ values:", values)
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          console.log("🚀 ~ errors:", errors)
          return (
            <S.Card as="form" onSubmit={handleSubmit}>
              <IconButton onClick={() => goToHome()} aria-label="back">
                <HiOutlineArrowLeft size={24} />
              </IconButton>
              <TextField
                placeholder="Nome"
                label="Nome"
                name='nome'
                value={values.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.nome}
              />
              <TextField
                placeholder="Email"
                label="Email"
                type="email"
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.email}
              />
              <TextField
                placeholder="CPF"
                label="CPF"
                name='cpf'
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.cpf}
              />
              <TextField
                label="Data de admissão"
                type="date"
                name='date'
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.date}
              />
              <Button
                type='submit'
                disabled={isSubmitting || Object.keys(errors).length}
              >
                Cadastrar
              </Button>
            </S.Card>
          )
        }}
      </Formik>
    </S.Container>
  );
};

export default NewUserPage;
