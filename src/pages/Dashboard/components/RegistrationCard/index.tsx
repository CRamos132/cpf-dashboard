import { ButtonSmall } from "~/components/Buttons";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import * as S from "./styles";
import { IRegistration } from "../../hooks";

type Props = {
  data: IRegistration;
  deleteRegistration: (userId: string) => void
};

const RegistrationCard = ({ data, deleteRegistration }: Props) => {

  const callDeleteRegistration = () => {
    deleteRegistration(data.id)
  }

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
        <ButtonSmall bgcolor="rgb(255, 145, 154)" >Reprovar</ButtonSmall>
        <ButtonSmall bgcolor="rgb(155, 229, 155)">Aprovar</ButtonSmall>
        <ButtonSmall bgcolor="#ff8858">Revisar novamente</ButtonSmall>

        <HiOutlineTrash onClick={callDeleteRegistration} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
