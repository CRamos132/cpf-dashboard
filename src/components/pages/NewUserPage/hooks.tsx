import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { validate } from "gerador-validador-cpf";
import { toast } from "react-toastify";
import routes from "../../../router/routes";
import { useHistory } from "react-router-dom";

export interface INewUserFormProps {
  email: string
  cpf: string
  employeeName: string
  admissionDate: string
}

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const lettersSeparatedRegex = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/
const containsSpaceRegex = /^(.*\s+.*)+$/

export default function useNewUser() {
  const history = useHistory();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const createRegistration = async (formData: INewUserFormProps) => {
    const { data } = await axios.post('http://localhost:3000/registrations', {
      ...formData,
      status: 'REVIEW'
    })
    return data
  }

  const { mutate } = useMutation({
    mutationFn: createRegistration,
    onSuccess: () => {
      toast.success("Usuário criado com sucesso!")
      goToHome()
    },
    onError: (error) => {
      console.error("error:", error)
      toast.error("Algo deu errado, tente novamente")
    }
  })

  const validateForm = (values: INewUserFormProps) => {
    const errors: Record<string, any> = {};
    if (!values.email) {
      errors.email = 'Obrigatório';
    } else if (
      !emailRegex.test(values.email)
    ) {
      errors.email = 'Email inválido';
    }

    if (!values.employeeName) {
      errors.employeeName = 'Obrigatório';
    } else if (!lettersSeparatedRegex.test(values.employeeName) || !containsSpaceRegex.test(values.employeeName)) {
      errors.employeeName = 'O nome deve conter sobrenome';
    }

    if (!values.cpf) {
      errors.cpf = 'Obrigatório';
    } else if (!validate(values.cpf)) {
      errors.cpf = 'CPF inválido'
    }

    if (!values.admissionDate) {
      errors.admissionDate = 'Obrigatório';
    }
    return errors;
  }

  return {
    validateForm,
    goToHome,
    createRegistration: mutate
  }
}