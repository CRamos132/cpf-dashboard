import * as S from './styles'

interface IIconButton extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const IconButton = (props: IIconButton) => {
  return (
    <S._IconButtonStyled type='button' {...props}>
      {props.children}
    </S._IconButtonStyled>
  );
};
