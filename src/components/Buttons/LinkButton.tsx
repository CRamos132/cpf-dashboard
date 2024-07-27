import styled from "styled-components";

const LinkButton = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px;
  background-color: transparent;
  cursor: pointer;
  height: 56px;
  color: black;
  font-size: 16px;
  cursor:${(props) => props.disabled ? 'not-allowed' : 'pointer'};
`;

export default LinkButton
