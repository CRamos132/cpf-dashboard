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
  isCPFValid: boolean
}

export const SearchBar = ({ cpfSearchText, handleSearchChange, refresh, isCPFValid }: ISearchBarProps) => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        mask="999.999.999-99"
        onChange={handleSearchChange}
        value={cpfSearchText}
        error={isCPFValid ? '' : 'CPF inválido'}
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={refresh}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
