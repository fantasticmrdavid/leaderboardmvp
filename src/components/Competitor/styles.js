import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 40% 40px;
  text-transform: capitalize;
  font-size: ${props => (props.leader ? '1.5rem' : '1.1rem')};
  font-weight: ${props => (props.leader ? 500 : undefined)};
  padding: 0.25em 0;
`;

export const Firstname = styled.div`
  text-align: left;
`;

export const Surname = styled.div`
  text-transform: uppercase;
  text-align: left;
`;

export const Score = styled.div`
  text-align: center;
`;
