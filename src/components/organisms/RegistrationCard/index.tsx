import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import * as S from "./styles";
import { IRegistration, RegistrationStatus } from "../../pages/DashboardPage/hooks";
import { useMemo } from "react";
import ButtonSmall from "../../atoms/ButtonSmall";

type Props = {
  data: IRegistration;
  deleteRegistration: (userId: string) => void
  changeRegistrationStatus: (data: { registration: IRegistration, status: RegistrationStatus }) => void
};

type AvailableActionsType = 'approve' | 'reprove' | 'review'

const RegistrationCard = ({ data, deleteRegistration, changeRegistrationStatus }: Props) => {

  const handleDeleteRegistration = () => {
    deleteRegistration(data.id)
  }

  const handleChangeRegistrationStatus = (status: RegistrationStatus) => {
    return () => {
      changeRegistrationStatus({ registration: data, status })
    }
  }

  const availableActions: AvailableActionsType[] = useMemo(() => {
    if (data.status === 'REVIEW') {
      return ['approve', 'reprove']
    }
    return ['review']
  }, [data.status])

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        <ButtonSmall
          bgcolor="rgb(255, 145, 154)"
          onClick={handleChangeRegistrationStatus('REPROVED')}
          disabled={!availableActions.includes('reprove')}
        >
          Reprovar
        </ButtonSmall>
        <ButtonSmall
          bgcolor="rgb(155, 229, 155)"
          onClick={handleChangeRegistrationStatus('APPROVED')}
          disabled={!availableActions.includes('approve')}
        >
          Aprovar
        </ButtonSmall>
        <ButtonSmall
          bgcolor="#ff8858"
          onClick={handleChangeRegistrationStatus('REVIEW')}
          disabled={!availableActions.includes('review')}
        >
          Revisar novamente
        </ButtonSmall>

        <HiOutlineTrash onClick={handleDeleteRegistration} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
