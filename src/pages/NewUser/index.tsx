import { HiOutlineArrowLeft } from "react-icons/hi";
import { Formik } from 'formik';
import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import useNewUser from "./hooks";



const NewUserPage = () => {
  const { validateForm, createRegistration, goToHome } = useNewUser()

  return (
    <S.Container>
      <Formik
        initialValues={{ email: '', cpf: '', employeeName: '', admissionDate: '' }}
        validate={validateForm}
        onSubmit={(values) => {
          createRegistration(values)

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
                name='employeeName'
                value={values.employeeName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.employeeName}
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
                name='admissionDate'
                value={values.admissionDate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.admissionDate}
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
