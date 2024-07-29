import { InputHTMLAttributes } from "react";
import InputMask from 'react-input-mask';
import * as S from "./styles";

interface ITextField extends InputHTMLAttributes<any> {
  label?: string;
  error?: string;
  mask?: string
}

const TextField = (props: ITextField) => {
  return (
    <div data-testid='textField'>
      <label htmlFor={props.id}>{props.label}</label>
      <InputMask mask={props.mask ?? ''} {...props}>
        <S.Input />
      </InputMask>
      <S.ErrorMessage>{props.error}</S.ErrorMessage>
    </div>
  );
};

export default TextField;
