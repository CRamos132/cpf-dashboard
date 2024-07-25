import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { IRegistration, RegistrationStatus } from "../../hooks"
import { toast } from "react-toastify"

export default function useColumns(registrations: IRegistration[] = []) {
  const queryClient = useQueryClient()

  const deleteRegistrationFunction = async (userId: string) => {
    const { data } = await axios.delete(`http://localhost:3000/registrations/${userId}`)
    return data
  }

  const changeStatus = async ({ registration, status }: { registration: IRegistration, status: RegistrationStatus }) => {
    const newRegistrationData = {
      ...registration,
      status
    }

    const { data } = await axios.put(`http://localhost:3000/registrations/${registration.id}`, newRegistrationData)
    return data
  }

  const { mutate: mutateStatus } = useMutation({
    mutationFn: changeStatus,
    onSuccess: (data) => {
      const updatedRegistrations = registrations.map(item => {
        if (item.id === data.id) {
          return data
        }
        return item
      })

      queryClient.setQueryData(['registrations'], updatedRegistrations)
      toast.success("Status alterado com sucesso!")
    },
    onError: (error) => {
      console.error("🚀 ~ error:", error)
      toast.error("Algo deu errado, tente novamente")
    }
  })

  // error handling
  const { mutate } = useMutation({
    mutationFn: deleteRegistrationFunction,
    onSuccess: (data) => {
      const deletedId = data.id
      const cleanRegistration = registrations.filter(({ id }) => id !== deletedId)
      queryClient.setQueryData(['registrations'], cleanRegistration)
      toast.success("Usuário removido com sucesso!")
    },
    onError: (error) => {
      console.error("🚀 ~ error:", error)
      toast.error("Algo deu errado, tente novamente")
    }
  })

  const separatedData = useMemo(() => {
    const queryData: IRegistration[] = registrations ?? []

    const reducedData = queryData.reduce((prev, curr) => {
      const currentStatus = curr.status
      if (prev?.[currentStatus]) {
        return {
          ...prev,
          [currentStatus]: [...prev[currentStatus] as Record<string, any>[], curr]
        }
      }
      return {
        ...prev,
        [currentStatus]: [curr]
      }

    }, {} as Record<RegistrationStatus, Record<string, any>>)

    return reducedData
  }, [registrations])

  return {
    changeRegistrationStatus: mutateStatus,
    deleteRegistration: mutate,
    separatedData
  }
}
