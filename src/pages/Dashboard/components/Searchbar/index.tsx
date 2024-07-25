import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";

interface ISearchBarProps {
  cpfSearchText: string
  handleSearchChange: any
  refresh: () => void
}

export const SearchBar = ({ cpfSearchText, handleSearchChange, refresh }: ISearchBarProps) => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" onChange={handleSearchChange} value={cpfSearchText} />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={refresh}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
