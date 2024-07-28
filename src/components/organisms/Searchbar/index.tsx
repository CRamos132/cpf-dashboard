import { HiRefresh } from "react-icons/hi";
import * as S from "./styles";
import TextField from "../../molecules/TextField";
import { IconButton } from "../../atoms/IconButton";
import Button from "../../atoms/Button";

interface ISearchBarProps {
  cpfSearchText: string
  handleSearchChange: any
  refresh: () => void
  isCPFValid: boolean
  goToNewAdmissionPage: () => void
}

export const SearchBar = ({ cpfSearchText, handleSearchChange, refresh, isCPFValid, goToNewAdmissionPage }: ISearchBarProps) => {
  return (
    <S.Container data-testid='searchBar'>
      <TextField
        placeholder="Digite um CPF válido"
        mask="999.999.999-99"
        id='cpf'
        onChange={handleSearchChange}
        value={cpfSearchText}
        error={isCPFValid ? '' : 'CPF inválido'}
      />
      <S.Actions>
        <IconButton aria-label="refetch" data-testid="refetch" onClick={refresh}>
          <HiRefresh />
        </IconButton>
        <Button onClick={goToNewAdmissionPage}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
