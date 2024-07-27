import * as S from "./styles";
import Button from "../Buttons";

interface IConfirmationModal {

}

export default function ConfirmationModal() {
  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.Text>
          Você deseja prosseguir com esta ação?
        </S.Text>
        <S.ButtonsRow>
          <Button>Cancelar</Button>
          <Button>Confirmar</Button>
        </S.ButtonsRow>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}