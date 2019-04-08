import styled from 'styled-components';
import { fadeIn } from 'styles/animations';
import theme from 'styles/theme';

export const CloseButton = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.75em;
  cursor: pointer;
  font-size: 1rem;
`;

export const Container = styled.div`
  position: fixed;
  top: calc(50% - 100px);
  left: calc(50% - 175px);
  width: 350px;
  z-index: 16;
  background: ${theme.colorWhite};
  box-shadow: ${theme.dropShadow};
  padding: 2em 2.5em;
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;
