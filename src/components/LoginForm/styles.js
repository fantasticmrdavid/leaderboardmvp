import styled from 'styled-components';
import theme from 'styles/theme';
import { fadeIn } from 'styles/animations';

export const Error = styled.div`
  color: ${theme.colorRed};
  font-size: 0.8rem;
  padding: 0.5em 0;
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;

export const Field = styled.div`
  margin: 0.5em 0;
`;

export const Heading = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.5em;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => (props.error ? theme.colorRed : 'inherit')};
`;

export const Input = styled.input`
  padding: 0.5em;
  width: 100%;
`;
