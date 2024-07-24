import { useQuery } from "@tanstack/react-query"
import axios from "axios"

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

  const { data } = useQuery<{ data: IRegistration[] }>({ queryKey: ['registrations'], queryFn: getRegistrations })

  return {
    data: data?.data ?? []
  }
}

export default useDashboard