import { IRegistration } from "../components/pages/DashboardPage/hooks";

export const APPROVED_DATA: IRegistration = {
  admissionDate: "22/10/2023",
  email: "luiz@caju.com.br",
  employeeName: "Luiz Filho",
  status: "APPROVED",
  cpf: "56642105087",
  id: "3",
};

export const REPROVED_DATA: IRegistration = {
  id: "2",
  admissionDate: "22/10/2023",
  email: "jose@caju.com.br",
  employeeName: "José Leão",
  status: "REPROVED",
  cpf: "78502270001",
};

export const REVIEW_DATA: IRegistration = {
  id: "1",
  admissionDate: "22/10/2023",
  email: "filipe@caju.com.br",
  employeeName: "Filipe Marins",
  status: "REVIEW",
  cpf: "78502270001",
};

export const EMPTY_COLUMNS = {
  APPROVED: [],
  REPROVED: [],
  REVIEW: [],
};

export const SEPARATED_DATA = {
  APPROVED: [APPROVED_DATA],
  REPROVED: [REPROVED_DATA],
  REVIEW: [REVIEW_DATA],
};

export const ONE_CARD_COLUMN = {
  APPROVED: [],
  REPROVED: [],
  REVIEW: [REVIEW_DATA],
};
