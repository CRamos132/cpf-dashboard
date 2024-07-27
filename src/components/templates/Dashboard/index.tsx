import Collumns from "../../organisms/Columns";
import * as S from "./styles";
import { SearchBar } from "../../organisms/Searchbar";
import { IRegistration, RegistrationStatus } from "../../pages/DashboardPage/hooks";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface IDashboardPage {
  cpfSearchText: string
  handleSearchChange: (event: any) => void
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<IRegistration[], Error>>
  separatedData: Record<RegistrationStatus, Record<string, any>>
  changeRegistrationStatus: (variables: {
    registration: IRegistration;
    status: RegistrationStatus;
  }) => void
  deleteRegistration: (userId: string) => void
  isCPFValid: boolean
}

const DashboardTemplate = ({
  cpfSearchText,
  handleSearchChange,
  refetch,
  separatedData,
  changeRegistrationStatus,
  deleteRegistration,
  isCPFValid
}: IDashboardPage) => {

  return (
    <S.Container>
      <SearchBar
        cpfSearchText={cpfSearchText}
        handleSearchChange={handleSearchChange}
        refresh={refetch}
        isCPFValid={isCPFValid}
      />
      <Collumns
        separatedData={separatedData}
        changeRegistrationStatus={changeRegistrationStatus}
        deleteRegistration={deleteRegistration}
      />
    </S.Container>
  );
};
export default DashboardTemplate;