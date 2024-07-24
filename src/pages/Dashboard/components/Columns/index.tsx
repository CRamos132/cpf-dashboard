
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { IRegistration, RegistrationStatus } from "../../hooks";
import useColumns from "./hooks";

interface IColumn {
  status: RegistrationStatus
  title: string
}

const allColumns: IColumn[] = [
  { status: 'REVIEW', title: "Pronto para revisar" },
  { status: 'APPROVED', title: "Aprovado" },
  { status: 'REPROVED', title: "Reprovado" },
];

type Props = {
  registrations?: IRegistration[];
};

const Collumns = ({ registrations }: Props) => {
  const { deleteRegistration, separatedData } = useColumns(registrations)
  return (
    <S.Container>
      {allColumns.map((collum) => {

        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {
                  separatedData?.[collum.status]?.map((registration: any) => {

                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                        deleteRegistration={deleteRegistration}
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
