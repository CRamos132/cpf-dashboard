import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { validate } from "gerador-validador-cpf";
import { toast } from "react-toastify";
import routes from "../../router/routes";
import { useHistory } from "react-router-dom";

interface IFormProps {
  email: string
  cpf: string
  employeeName: string
  admissionDate: string
}

export default function useNewUser() {
  const history = useHistory();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const createRegistration = async (formData: IFormProps) => {
    const { data } = await axios.post('http://localhost:3000/registrations', {
      ...formData,
      status: 'REVIEW'
    })
    return data
  }

  const { mutate } = useMutation({
    mutationFn: createRegistration,
    onSuccess: (data) => {
      console.log("🚀 ~ data:", data)
      // const updatedRegistrations = registrations.map(item => {
      //   if (item.id === data.id) {
      //     return data
      //   }
      //   return item
      // })

      // queryClient.setQueryData(['registrations'], updatedRegistrations)
      toast.success("Usuário criado com sucesso!")
      goToHome()
    },
    onError: (error) => {
      console.error("error:", error)
      toast.error("Algo deu errado, tente novamente")
    }
  })

  const validateForm = (values: IFormProps) => {
    const errors: Record<string, any> = {};
    if (!values.email) {
      errors.email = 'Obrigatório';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Email inválido';
    }

    if (!values.admissionDate) {
      errors.nome = 'Obrigatório';
    }

    if (!values.cpf) {
      errors.cpf = 'Obrigatório';
    } else if (!validate(values.cpf)) {
      errors.cpf = 'CPF inválido'
    }

    if (!values.admissionDate) {
      errors.date = 'Obrigatório';
    }
    return errors;
  }

  return {
    validateForm,
    goToHome,
    createRegistration: mutate
  }
}