import Button from "../../atoms/Button";
import LinkButton from "../../atoms/LinkButton";
import * as S from "./styles";

interface IConfirmationModal {
  isOpen: boolean
  actionText?: string
  actionFunction?: () => void
  cancelFunction: () => void
}

export default function ConfirmationModal({ isOpen, actionFunction, actionText, cancelFunction }: IConfirmationModal) {
  if (!isOpen) {
    return null
  }

  return (
    <S.ModalWrapper>
      <S.ModalContent data-testid='modalContent'>
        <S.Text data-testid='modalText'>
          Você deseja {actionText}?
        </S.Text>
        <S.ButtonsRow>
          <LinkButton onClick={cancelFunction}>Cancelar</LinkButton>
          <Button onClick={actionFunction}>Confirmar</Button>
        </S.ButtonsRow>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}