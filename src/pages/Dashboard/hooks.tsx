import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import useDebounce from "../../hooks/useDebounce"
import { validate } from "gerador-validador-cpf"
import { toast } from "react-toastify"

export type RegistrationStatus = 'REVIEW' | 'APPROVED' | 'REPROVED'

export interface IRegistration {
  admissionDate: string
  email: string
  employeeName: string
  status: RegistrationStatus
  cpf: string
  id: string
}

function useDashboard() {
  const [searchText, setSearchText] = useState('')
  const [debouncedText, setDebouncedText] = useState('')
  const queryClient = useQueryClient()

  const { debouncedAction } = useDebounce(setDebouncedText)

  const getRegistrations = async () => {
    const queryURL = new URL('http://localhost:3000/registrations')

    if (searchText) {
      queryURL.searchParams.set('cpf', searchText)
    }

    const { data } = await axios.get(queryURL.toString())
    return data
  }

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

  const { data, refetch } = useQuery<IRegistration[]>({ queryKey: ['registrations'], queryFn: getRegistrations })

  const registrations = useMemo(() => {
    return data ?? []
  }, [data])

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
      console.error("error:", error)
      toast.error("Algo deu errado, tente novamente")
    }
  })

  const { mutate } = useMutation({
    mutationFn: deleteRegistrationFunction,
    onSuccess: (data) => {
      const deletedId = data.id
      const cleanRegistration = registrations.filter(({ id }) => id !== deletedId)
      queryClient.setQueryData(['registrations'], cleanRegistration)
      toast.success("Usuário removido com sucesso!")
    },
    onError: (error) => {
      console.error("error:", error)
      toast.error("Algo deu errado, tente novamente")
    }
  })


  const handleSearchChange = (event: any) => {
    const value = event.target.value
    setSearchText(value)
    debouncedAction(value)
  }

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

  const isCPFValid = useMemo(() => {
    if (!debouncedText) {
      return true
    }
    return validate(debouncedText)
  }, [debouncedText])

  useEffect(() => {
    if (isCPFValid || !debouncedText) {
      refetch()
    }
  }, [debouncedText, isCPFValid, refetch])

  return {
    cpfSearchText: searchText,
    handleSearchChange,
    refetch,
    changeRegistrationStatus: mutateStatus,
    deleteRegistration: mutate,
    separatedData,
    isCPFValid
  }
}

export default useDashboard