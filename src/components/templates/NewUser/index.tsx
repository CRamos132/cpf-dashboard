import { HiOutlineArrowLeft } from "react-icons/hi";
import * as S from "./styles";
import { INewUserFormProps } from "../../pages/NewUserPage/hooks";
import { IConfirmationModalOptions } from "../../../contexts/ConfirmationModalContext";
import { Formik } from "formik";
import { IconButton } from "../../atoms/IconButton";
import TextField from "../../molecules/TextField";
import Button from "../../atoms/Button";
import { UseMutateFunction } from "@tanstack/react-query";

const DEFAULT_FORM_DATA = { email: '', cpf: '', employeeName: '', admissionDate: '' }

interface INewUserTemplate {
  setConfirmationOptions: (options: IConfirmationModalOptions | null) => void
  validateForm: (values: INewUserFormProps) => Record<string, any>
  createRegistration: UseMutateFunction<any, Error, INewUserFormProps, unknown>
  goToHome: () => void
}

const NewUserTemplate = ({
  setConfirmationOptions,
  validateForm,
  createRegistration,
  goToHome,
}: INewUserTemplate) => {
  // const { setConfirmationOptions } = useConfirmationModal()
  // const { validateForm, createRegistration, goToHome } = useNewUser()

  return (
    <S.Container>
      <Formik
        initialValues={DEFAULT_FORM_DATA}
        validate={validateForm}
        onSubmit={(values) => {
          setConfirmationOptions({
            confirmationAction: () => createRegistration(values),
            confirmationText: 'criar usuário'
          })

        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
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
                mask="999.999.999-99"
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
                disabled={Object.keys(errors).length}
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

export default NewUserTemplate;
