import Collumns, { SeparatedDataType } from "../../organisms/Columns";
import * as S from "./styles";
import { SearchBar } from "../../organisms/Searchbar";
import { IRegistration, RegistrationStatus } from "../../pages/DashboardPage/hooks";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import LoadingSpinner from "../../molecules/LoadingSpinner";

interface IDashboardPage {
  cpfSearchText: string
  handleSearchChange: (event: any) => void
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<IRegistration[], Error>>
  separatedData: SeparatedDataType
  changeRegistrationStatus: (variables: {
    registration: IRegistration;
    status: RegistrationStatus;
  }) => void
  deleteRegistration: (userId: string) => void
  isCPFValid: boolean
  isLoading: boolean
  goToNewAdmissionPage: () => void
}

const DashboardTemplate = ({
  cpfSearchText,
  handleSearchChange,
  refetch,
  separatedData,
  changeRegistrationStatus,
  deleteRegistration,
  isCPFValid,
  isLoading,
  goToNewAdmissionPage
}: IDashboardPage) => {

  return (
    <S.Container>
      {isLoading && <LoadingSpinner />}
      <SearchBar
        cpfSearchText={cpfSearchText}
        handleSearchChange={handleSearchChange}
        refresh={refetch}
        isCPFValid={isCPFValid}
        goToNewAdmissionPage={goToNewAdmissionPage}
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
