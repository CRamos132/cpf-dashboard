
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { IRegistration, RegistrationStatus } from "../../pages/DashboardPage/hooks";

interface IColumn {
  status: RegistrationStatus
  title: string
}

export type SeparatedDataType = Record<RegistrationStatus, Record<string, any>>

const allColumns: IColumn[] = [
  { status: 'REVIEW', title: "Pronto para revisar" },
  { status: 'APPROVED', title: "Aprovado" },
  { status: 'REPROVED', title: "Reprovado" },
];

interface IColumns {
  deleteRegistration: (userId: string) => void
  changeRegistrationStatus: (data: { registration: IRegistration, status: RegistrationStatus }) => void
  separatedData?: SeparatedDataType
}

const Collumns = ({ deleteRegistration, separatedData, changeRegistrationStatus }: IColumns) => {

  return (
    <S.Container>
      {allColumns.map((collum) => {

        return (
          <S.Column data-testid='column' status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent data-testid='columnContent'>
                {
                  separatedData?.[collum.status]?.map((registration: any) => {

                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                        deleteRegistration={deleteRegistration}
                        changeRegistrationStatus={changeRegistrationStatus}
                      />
                    );
                  })
                }
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
