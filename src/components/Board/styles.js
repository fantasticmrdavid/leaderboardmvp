import styled from 'styled-components';
import theme from 'styles/theme';
import { fadeIn } from 'styles/animations';

export const Access = styled.div`
  color: ${theme.colorGrey};
  text-transform: capitalize;
  margin-bottom: 1em;
  text-align: center;
`;

export const Container = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  max-width: 500px;
  padding: 1em 1.5em 2em;
  margin: 1em;
  border: 1px solid ${theme.colorLightGrey};
  background-color: ${theme.colorWhite};
  transition: 0.3s;
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;

  &:hover {
    box-shadow: ${theme.dropShadow};
  }
`;


export const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  margin: 0.5em 0 0.75em;
`;
