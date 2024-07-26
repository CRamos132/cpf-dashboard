import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import useDashboard from "./hooks";

const DashboardPage = () => {

  const { cpfSearchText, handleSearchChange, refetch, separatedData, changeRegistrationStatus, deleteRegistration } = useDashboard()

  return (
    <S.Container>
      <SearchBar cpfSearchText={cpfSearchText} handleSearchChange={handleSearchChange} refresh={refetch} />
      <Collumns separatedData={separatedData} changeRegistrationStatus={changeRegistrationStatus} deleteRegistration={deleteRegistration} />
    </S.Container>
  );
};
export default DashboardPage;
