import styled from "styled-components";

export const GrayOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(173, 173, 173, 0.5);
  overflow: hidden;
`