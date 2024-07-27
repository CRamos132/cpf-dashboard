import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import useDashboard from "./hooks";
import ConfirmationModal from "../../components/ConfirmationModal";

const DashboardPage = () => {

  const {
    cpfSearchText,
    handleSearchChange,
    refetch,
    separatedData,
    changeRegistrationStatus,
    deleteRegistration,
    isCPFValid
  } = useDashboard()

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
      <ConfirmationModal />
    </S.Container>
  );
};
export default DashboardPage;
