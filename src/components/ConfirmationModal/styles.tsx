import styled from "styled-components"

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(173, 173, 173, 0.5);
  overflow: hidden;
`

export const ModalContent = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 24px;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translateX(-50%) translateY(-50%);
`

export const ButtonsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  column-gap: 16px;
`

export const Text = styled.h2`
  font-size: 24px;
  font-weight: normal;
`