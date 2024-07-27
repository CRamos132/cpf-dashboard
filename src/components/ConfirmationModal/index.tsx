import * as S from "./styles";
import Button from "../Buttons";
import LinkButton from "../Buttons/LinkButton";

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
      <S.ModalContent>
        <S.Text>
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