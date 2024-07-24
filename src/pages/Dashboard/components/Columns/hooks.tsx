import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { IRegistration, RegistrationStatus } from "../../hooks"

export default function useColumns(registrations: IRegistration[] = []) {
  const queryClient = useQueryClient()

  const deleteRegistrationFunction = async (userId: string) => {
    const data = await axios.delete(`http://localhost:3000/registrations/${userId}`)
    return data
  }

  // error handling
  const { mutate } = useMutation({
    mutationFn: deleteRegistrationFunction,
    onSuccess: (data) => {
      const deletedId = data.data.id
      const cleanRegistration = registrations.filter(({ id }) => id !== deletedId)
      queryClient.setQueryData(['registrations'], { data: cleanRegistration })
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
    deleteRegistration: mutate,
    separatedData
  }
}
