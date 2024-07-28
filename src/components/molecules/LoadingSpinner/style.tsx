import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
  from{
    -webkit-transform: rotate(0deg);
  }
  to{
    -webkit-transform: rotate(-360deg);
  }
`

export const LoadingIconWrapper = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translateX(-50%) translateY(-50%);
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`