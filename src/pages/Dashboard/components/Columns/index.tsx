
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { RegistrationStatus } from "../../hooks";

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
  registrations?: Record<RegistrationStatus, Record<string, any>>;
};

const Collumns = ({ registrations }: Props) => {
  return (
    <S.Container>
      {allColumns.map((collum) => {
        console.group(collum.status)
        console.log("🚀 ~ collum.status:", collum.status)
        console.log("🚀 ~ registrations:", registrations)
        console.log("🚀 ~ registrations?.[collum.status]:", registrations?.[collum.status])
        console.groupEnd()

        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {
                  registrations?.[collum.status]?.map((registration: any) => {

                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                      />
                    );
                  })
                }
                {/* {props?.registrations?.map((registration) => {
                  return (
                    <RegistrationCard
                      data={registration}
                      key={registration.id}
                    />
                  );
                })} */}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
