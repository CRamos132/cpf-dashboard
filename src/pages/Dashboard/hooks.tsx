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
    const { data } = await axios.get('http://localhost:3000/registrations')
    return data
  }

  const { data } = useQuery<IRegistration[]>({ queryKey: ['registrations'], queryFn: getRegistrations })
  console.log("🚀 ~ data:", data)

  return {
    data: data ?? []
  }
}

export default useDashboard