import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import useDashboard from "./hooks";

const DashboardPage = () => {

  const { data } = useDashboard()

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={data} />
    </S.Container>
  );
};
export default DashboardPage;
