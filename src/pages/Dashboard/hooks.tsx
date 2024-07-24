import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"

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
  const getRegistrations = async () => {
    const data = await axios.get('http://localhost:3000/registrations')
    return data
  }

  const { data } = useQuery({ queryKey: ['registrations'], queryFn: getRegistrations })

  const separatedData = useMemo(() => {
    const queryData: IRegistration[] = data?.data ?? []

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
  }, [data?.data])

  return {
    separatedData
  }
}

export default useDashboard